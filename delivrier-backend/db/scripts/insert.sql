--------------------------
------------------- rol
--------------------------

INSERT INTO rol (nombre) 
VALUES ('SuperUser');
INSERT INTO rol (nombre) 
VALUES ('User');

--------------------------
------------------- persona_cliente
--------------------------

INSERT INTO persona_cliente (
	primer_nombre,
	segundo_nombre,
	primer_apellido,
	segundo_apellido,
	telefono,
	correo,
	id,
	fecha_nacimiento	
) 
VALUES (
	'Anthony',
	'Gabriel',
	'Rodriguez',
	'Zambrano',
	'04241234567',
	'anthonygrz@correo.com',
	'28143369',
	'1999/11/08'
);

INSERT INTO persona_cliente (
	primer_nombre,
	segundo_nombre,
	primer_apellido,
	segundo_apellido,
	telefono,
	correo,
	id,
	fecha_nacimiento	
) 
VALUES (
	'Luis',
	'Reynaldo',
	'Fuentes',
	'Salazar',
	'04241234567',
	'luisrfs@correo.com',
	'19123456',
	'1998/11/05'
);

INSERT INTO persona_cliente (
	primer_nombre,
	segundo_nombre,
	primer_apellido,
	segundo_apellido,
	telefono,
	correo,
	id,
	fecha_nacimiento	
) 
VALUES (
	'Diego',
	'Alfonso',
	'Gutierrez',
	'Duarte',
	'04241234567',
	'diegoagd@correo.com',
	'10123456',
	'1998/07/14'
);

INSERT INTO persona_cliente (
	primer_nombre,
	segundo_nombre,
	primer_apellido,
	segundo_apellido,
	telefono,
	correo,
	id,
	fecha_nacimiento	
) 
VALUES (
	'Petra',
	'Alexandra',
	'Fernandez',
	'Roa',
	'04241234567',
	'petraafr@correo.com',
	'26123456',
	'1991/04/20'
);

INSERT INTO persona_cliente (
	primer_nombre,
	segundo_nombre,
	primer_apellido,
	segundo_apellido,
	telefono,
	correo,
	id,
	fecha_nacimiento	
) 
VALUES (
	'Luis',
	'Manuel',
	'Perez',
	'Sanchez',
	'04241234567',
	'luismps@correo.com',
	'20123456',
	'1992/05/29'
);

INSERT INTO persona_cliente (
	primer_nombre,
	segundo_nombre,
	primer_apellido,
	segundo_apellido,
	telefono,
	correo,
	id,
	fecha_nacimiento	
) 
VALUES (
	'Hernando',
	'Luis',
	'Vera',
	'Petroclo',
	'04241234567',
	'hernandolvp@correo.com',
	'23123456',
	'1998/07/27'
);

-- usuario

INSERT INTO usuario (
	usuario,
	contrasena,
	fk_rol,
	fk_persona_cliente
) 
VALUES (
	'thony',
	'12345678',
	2,
	1
);

INSERT INTO usuario (
	usuario,
	contrasena,
	fk_rol,
	fk_persona_cliente
) 
VALUES (
	'flaquito',
	'12345678',
	2,
	2
);

INSERT INTO usuario (
	usuario,
	contrasena,
	fk_rol,
	fk_persona_cliente
) 
VALUES (
	'diego',
	'12345678',
	2,
	3
);

INSERT INTO usuario (
	usuario,
	contrasena,
	fk_rol,
	fk_persona_cliente
) 
VALUES (
	'petrica',
	'12345678',
	2,
	4
);

INSERT INTO usuario (
	usuario,
	contrasena,
	fk_rol,
	fk_persona_cliente
) 
VALUES (
	'usuario_L544',
	'12345678',
	2,
	5
);

INSERT INTO usuario (
	usuario,
	contrasena,
	fk_rol,
	fk_persona_cliente
) 
VALUES (
	'herni',
	'12345678',
	2,
	6
);

--------------------------
------------------- persona_destinatario
--------------------------

INSERT INTO persona_destinatario (
	primer_nombre,
	segundo_nombre,
	primer_apellido,
	segundo_apellido,
	telefono,
	correo,
	fk_persona_cliente
) 
VALUES (
	'Manolo',
	'Manu',
	'Silva',
	'Zambrano',
	'04241234567',
	'correo@correo.com',
	3
);

INSERT INTO persona_destinatario (
	primer_nombre,
	segundo_nombre,
	primer_apellido,
	segundo_apellido,
	telefono,
	correo,
	fk_persona_cliente
) 
VALUES (
	'Luisa',
	'Sulita',
	'Marinera',
	'Castaneda',
	'04241234567',
	'correo@correo.com',
	5
);

INSERT INTO persona_destinatario (
	primer_nombre,
	segundo_nombre,
	primer_apellido,
	segundo_apellido,
	telefono,
	correo,
	fk_persona_cliente
) 
VALUES (
	'Fernando',
	'Alex',
	'Linares',
	'Castaneda',
	'04241234567',
	'correo@correo.com',
	4
);

--------------------------
------------------- notificacion
--------------------------

INSERT INTO notificacion (
	nombre,
	descripcion,
	fk_usuario
) 
VALUES (
	'Aviso',
	'Le avisamos que usted esta arrestado por infringir el articulo 065 de la ley que no permite ser tan bello',
	4
);

INSERT INTO notificacion (
	nombre,
	descripcion,
	fk_usuario
) 
VALUES (
	'Aviso',
	'Le avisamos que usted es feo',
	5
);

INSERT INTO notificacion (
	nombre,
	descripcion,
	fk_usuario
) 
VALUES (
	'Aviso',
	'Le avisamos que usted tiene karanavaaaairus',
	3
);

--------------------------
------------------- tipo_envio
--------------------------

INSERT INTO tipo_envio (
	nombre,
	descripcion,
	tarifa_base
) 
VALUES (
	'Standard',
	'Este es el tipo de envío básico. No posee consideraciones especiales en el tiempo de entrega y cuidado, estos son el standard para todos los paquetes enviados. Su paquete llegará a su destino en máximo 3 semanas.',
	15
);

INSERT INTO tipo_envio (
	nombre,
	descripcion,
	tarifa_base
) 
VALUES (
	'Priority',
	'Pone especial atención en el cuidado y trato de los paquetes. Es el mejor servicio para paquetes frágiles. Además, el tiempo máximo de llegado del paquete a su destino es de 1 semana.',
	20
);

INSERT INTO tipo_envio (
	nombre,
	descripcion,
	tarifa_base
) 
VALUES (
	'Express',
	'Este servicio se enfoca en la rapidez de entrega. Al seleccionarlo garantizamos que el tiempo de llegada de su paquete a su destino no superará los 3 días. Es el mejor servicio para entregas urgentes.',
	30
);

--------------------------
------------------- seguro
--------------------------

INSERT INTO seguro (
	nombre,
	descripcion,
	tarifa
) 
VALUES (
	'We Care',
	'Asegura tu envio por el 50% de su valor en caso de extraviarse lo que enviaste durante el trayecto',
	50
);

INSERT INTO seguro (
	nombre,
	descripcion,
	tarifa
) 
VALUES (
	'We Love',
	'Asegura tu envio por el 100% de su valor en caso de extraviarse lo que enviaste durante el trayecto',
	100
);

--------------------------
------------------- configuracion_simulacion
--------------------------

INSERT INTO configuracion_simulacion (
	tiempo_inicio
) 
VALUES (
	5
);

--------------------------
------------------- lugar
--------------------------

INSERT INTO lugar (
	direccion,
	altitud,
	longitud,
	zip
) 
VALUES (
	'1301-1399 NW 7th Ct, Miami, FL 33136, EE. UU.',
	25.787685,
	-80.207872,
	33136
);

INSERT INTO lugar (
	direccion,
	altitud,
	longitud,
	zip
) 
VALUES (
	'1084 Bedford Ave, Brooklyn, NY 11216, EE. UU.',
	40.687778,
	-73.954956,
	11216
);

INSERT INTO lugar (
	direccion,
	altitud,
	longitud,
	zip
) 
VALUES (
	'Roxbury, Massachusetts 02119, EE. UU.',
	42.328915,
	-71.084241,
	02119
);

INSERT INTO lugar (
	direccion,
	altitud,
	longitud,
	zip
)
VALUES (
	'499 Hamilton Ave, Palo Alto, CA 94301, EE. UU.',
	37.447324,
	-122.158382,
	94301
);

INSERT INTO lugar (
	direccion,
	altitud,
	longitud,
	zip
)
VALUES (
	'1932 1st Ave, Seattle, WA 98101, EE. UU.',
	47.610932,
	-122.342239,
	98101
);

--------------------------
------------------- oficina
--------------------------

INSERT INTO oficina (
	nombre,
	fk_lugar
) 
VALUES (
	'Florida-01',
	1
);

INSERT INTO oficina (
	nombre,
	fk_lugar
) 
VALUES (
	'NewYork-01',
	2
);

INSERT INTO oficina (
	nombre,
	fk_lugar
) 
VALUES (
	'Boston-01',
	3
);

--------------------------
------------------- envio
--------------------------

INSERT INTO envio (
	N_rastreo,
	fk_usuario,
	fk_seguro,
	fk_configuracion_simulacion,
	fk_persona_destinatario,
	fk_tipo_envio
) 
VALUES (
	86256,
	2,
	1,
	1,
	1,
	1
);

INSERT INTO envio (
	N_rastreo,
	fk_usuario,
	fk_seguro,
	fk_configuracion_simulacion,
	fk_persona_destinatario,
	fk_tipo_envio
) 
VALUES (
	92532,
	1,
	2,
	1,
	2,
	3
);

--------------------------
------------------- trayecto
--------------------------

INSERT INTO trayecto (
	fecha_inicial,
	fecha_final,
	distancia,
	fk_oficina_origen,
	fk_lugar_destino,
	fk_envio
) 
VALUES (
	'2020-01-08 04:05:06',
	'2020-01-08 06:05:06',
	4140.29,
	1,
	4,
	2
);

INSERT INTO trayecto (
	fecha_inicial,
	fecha_final,
	distancia,
	fk_lugar_origen,
	fk_lugar_destino,
	fk_envio
) 
VALUES (
	'2020-01-08 06:05:06',
	'2020-01-08 10:05:06',
	1130.25,
	4,
	5,
	2
);

INSERT INTO trayecto (
	fecha_inicial,
	fecha_final,
	distancia,
	fk_oficina_origen,
	fk_lugar_destino,
	fk_envio
) 
VALUES (
	'2020-01-08 13:05:06',
	'2020-01-09 06:05:06',
	4000.40,
	3,
	5,
	1
);

INSERT INTO trayecto (
	fecha_inicial,
	fecha_final,
	distancia,
	fk_lugar_origen,
	fk_lugar_destino,
	fk_envio
) 
VALUES (
	'2020-01-09 06:05:06',
	'2020-01-10 01:05:06',
	1130.25,
	5,
	4,
	1
);

--------------------------
------------------- parametro
--------------------------

INSERT INTO parametro (
	nombre,
	unidad,
	valor_maximo,
	valor_minimo
) 
VALUES (
	'Alto',
	'cm',
	178,
	0
);

INSERT INTO parametro (
	nombre,
	unidad,
	valor_maximo,
	valor_minimo
) 
VALUES (
	'Ancho',
	'cm',
	203,
	0.1
);

INSERT INTO parametro (
	nombre,
	unidad,
	valor_maximo,
	valor_minimo
) 
VALUES (
	'Largo',
	'cm',
	302,
	0.1
);

INSERT INTO parametro (
	nombre,
	unidad,
	valor_maximo,
	valor_minimo
) 
VALUES (
	'Peso',
	'kg',
	997,
	0.1
);

INSERT INTO parametro (
	nombre,
	unidad,
	valor_maximo,
	valor_minimo
) 
VALUES (
	'Cantidad',
	'unidades',
	25,
	1
);

INSERT INTO parametro (
	nombre,
	unidad,
	valor_maximo,
	valor_minimo,
	fk_parametro
) 
VALUES (
	'Cantidad envío',
	'unidades',
	25,
	1,
	5
);

INSERT INTO parametro (
	nombre,
	unidad,
	valor_maximo,
	valor_minimo,
	fk_parametro
) 
VALUES (
	'Valor calculado',
	'$',
	25,
	1,
	6
);

--------------------------
------------------- empaque
--------------------------

INSERT INTO empaque (
	nombre,
	descripcion,
	ancho,
	largo,
	precio
) 
VALUES (
	'Sobre',
	'Sobre Estandard de 35x25 cm',
	25,
	35,
	8
);

INSERT INTO empaque (
	nombre,
	descripcion,
	alto,
	ancho,
	largo,
	precio
) 
VALUES (
	'Caja cuadrada',
	'Caja cuadrada pequeña de 20x20x20 cm',
	20,
	20,
	20,
	13.5
);

INSERT INTO empaque (
	nombre,
	descripcion,
	alto,
	ancho,
	largo,
	precio
) 
VALUES (
	'Caja cuadrada',
	'Caja cuadrada mediana de 40x40x40 cm',
	40,
	40,
	40,
	34
);

INSERT INTO empaque (
	nombre,
	descripcion,
	alto,
	ancho,
	largo,
	precio
) 
VALUES (
	'Caja cuadrada',
	'Caja cuadrada grande de 71x71x71 cm',
	71,
	71,
	71,
	165
);

INSERT INTO empaque (
	nombre,
	descripcion,
	alto,
	ancho,
	largo,
	precio
) 
VALUES (
	'Caja rectangular',
	'Caja rectangular pequeña de 32x27x3 cm',
	32,
	27,
	3,
	11
);

INSERT INTO empaque (
	nombre,
	descripcion,
	alto,
	ancho,
	largo,
	precio
) 
VALUES (
	'Caja rectangular',
	'Caja rectangular mediana de 30x30x46 cm',
	30,
	30,
	46,
	30
);

INSERT INTO empaque (
	nombre,
	descripcion,
	alto,
	ancho,
	largo,
	precio
) 
VALUES (
	'Caja rectangular',
	'Caja rectangular grande de 58x43x30 cm',
	58,
	43,
	30,
	42
);

--------------------------
------------------- paquete
--------------------------

INSERT INTO paquete (
	descripcion,
	fk_empaque,
	fk_envio
) 
VALUES (
	'Dos vasos',
	5,
	1
);

INSERT INTO paquete (
	descripcion,
	fk_empaque,
	fk_envio
) 
VALUES (
	'Un televisor',
	7,
	2
);

--------------------------
------------------- parametro_paquete
--------------------------

INSERT INTO parametro_paquete (
	valor,
	fk_paquete,
	fk_parametro
) 
VALUES (
	15,
	1,
	5
);

INSERT INTO parametro_paquete (
	valor,
	fk_paquete,
	fk_parametro
) 
VALUES (
	20,
	2,
	5
);

--------------------------
------------------- parametro_envio
--------------------------

INSERT INTO parametro_envio (
	valor,
	fk_envio,
	fk_parametro
) 
VALUES (
	14,
	1,
	6
);

INSERT INTO parametro_envio (
	valor,
	fk_envio,
	fk_parametro
) 
VALUES (
	18,
	2,
	6
);

INSERT INTO estatus (nombre)
VALUES ('Active'), ('Delete');

SELECT * FROM rol;
SELECT * FROM persona_cliente;
SELECT * FROM usuario;
SELECT * FROM persona_destinatario;
SELECT * FROM lugar;
SELECT * FROM envio;
SELECT * FROM trayecto;
SELECT * FROM empaque;
SELECT * FROM estatus;






