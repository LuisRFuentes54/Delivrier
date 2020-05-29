import {Injectable, Inject, OnModuleInit, HttpService} from '@nestjs/common';
import { TrackingService } from '../tracking/tracking.service';
import { ConfigService } from '@nestjs/config';
import { Logger } from 'winston';

@Injectable()
export class BotService  implements OnModuleInit{
  constructor( @Inject('winston')
  private readonly logger: Logger, private httpService: HttpService,private trackingService: TrackingService, private configService: ConfigService) {}
  
  onModuleInit(){
    this.httpService.get('http://localhost:3000/delivrier/api/v1').subscribe((res)=>{ this.logger.info(`Telegram Bot Started`);});
  }

  async botMessage() {
    const TelegramBot = require('node-telegram-bot-api');
    const bot = new TelegramBot(process.env.TELEGRAM_API_TOKEN, { polling: true });
    const trackingServ = this.trackingService;
    bot.onText(/^\/start/, function(msg, match){
      let chatId = msg.chat.id;
      bot.sendMessage(chatId, `Welcome to our Delivrier Bot. \n\n To see the status of a shippment just send a messaeg with the form: \n\n/PackageCheck ########\n\n Don't forget to replace ######## with the tracking ID of your shippment`, {parse_mode:'Markdown'});
       
     
    });
    bot.onText(/^\/PackageCheck (.+)/, async function(msg, match){
      let trackingNumber = match[1];
      let chatId = msg.chat.id;
      let regex = new RegExp("\\b[0-9]{8}\\b","g");
      let rex = regex.test(trackingNumber)
      if(rex){
        try{
          bot.sendMessage(chatId, `Looking for shippment with tacking ID ${trackingNumber}...`, {parse_mode:'Markdown'});
          let response: any = await trackingServ.getShippingStatusInfoByNumber(trackingNumber);
          if(!response.roads ){
            
          await bot.sendMessage(chatId, `The package hasn't left the office yet`, {parse_mode:'Markdown'});
          }
          else{
            response.roads = await response.roads.sort((roadA, roadB)=>{
            if(roadA.id>roadB.id){
              return  1;
            }
            else {
              if(roadA.id<roadB.id){
                return  -1;
              }

            }
            return 0;
          });
          await bot.sendMessage(chatId, `Shippment tracking ID: ${trackingNumber}\n\n Current Status: ${response.actualStatus}\n\n Home Office: \n ${response.roads[0].initialOffice.name} \n ${response.roads[0].initialOffice.place.address} \n\n Destination:\n ${response.roads[response.roads.length-1].endingPlace.address} `, {parse_mode:'Markdown'});
          let message= '';
          let date;
          let messageDate = '';
          let i = 0;
          response.roads.forEach((route)=>{
            let messageRoute ='';
            if(i==0){
              date = route.initialDate;
              messageDate = date?date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+`:${(date.getMinutes()/10) ==0?'0':''}`+date.getMinutes():'';
              messageRoute = `${i+1}. ${response.lineTime[i].status}\n${route.initialOffice.name} \n ${route.initialOffice.place.address}\n ${messageDate}\n\n`;
              message = message + messageRoute;
            }
            else{
              date = route.initialDate;
              messageDate = date?date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+`:${(date.getMinutes()/10) ==0?'0':''}`+date.getMinutes():'';
              messageRoute = `${i+1}. ${response.lineTime[i]?`${i== (response.roads.length-1)? 'Checkpoint reached':(response.lineTime[i].status == 'In Transit'?'In Transit to':response.lineTime[i].status)}\n`:''} ${route.initialPlace.address}\n ${messageDate}\n\n`;
              message = message + messageRoute;
              if(i==response.roads.length-1){
                date = route.endingDate;
              messageDate = date?date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+`:${(date.getMinutes()/10) ==0?'0':''}`+date.getMinutes():'';
                messageRoute = `${i+2}. ${response.lineTime[i]?`${response.lineTime[i].status == 'In Transit'?'In Transit to':response.lineTime[i].status}\n`:''} ${route.endingPlace.address}\n ${messageDate}\n\n`;
                message = message + messageRoute;
              }
              
            }
            i++;
          })
          bot.sendMessage(chatId, `ROUTE\n\n${message} `, {parse_mode:'Markdown'}); 
          }
          //bot.sendMessage(chatId, `Result: \n\n ${res.data.Poster}\n\n${res.data.Title} - ${res.data.Year}\nDirector: ${res.data.Director}\nActors: ${res.data.Actors}\nAwards: ${res.data.Awards}`, {parse_mode:'Markdown'});
        }
        catch(e){
          bot.sendMessage(chatId, `Ups! There have been an error looking for shippment with tracking ID ${trackingNumber}`);
        }
      }
      else{
        bot.sendMessage(chatId, `Ups! '${trackingNumber}' is not a valid tracking ID`);
      }
      
        
         
        
         
        
    });
  }
}
