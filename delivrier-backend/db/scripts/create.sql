--------------------------
------------------- Usuarios
--------------------------

CREATE TABLE rol (
	clave serial PRIMARY KEY,
	nombre varchar(15) NOT NULL
);

CREATE TABLE persona_cliente (
	clave serial PRIMARY KEY,
	primer_nombre varchar(20) NOT NULL,
	segundo_nombre varchar(20),
	primer_apellido varchar(20) NOT NULL,
	segundo_apellido varchar(20),
	telefono varchar(12) NOT NULL,
	correo varchar(40) UNIQUE NOT NULL,
	id integer UNIQUE NOT NULL,
	foto text NOT NULL DEFAULT 'None',
	fecha_nacimiento date NOT NULL
);

CREATE TABLE usuario (
	clave serial PRIMARY KEY,
	usuario varchar(20) UNIQUE NOT NULL,
	contrasena varchar(20) NOT NULL,
	fk_rol integer NOT NULL,
	fk_persona_cliente integer UNIQUE,
	FOREIGN KEY (fk_rol) REFERENCES rol(clave),
	FOREIGN KEY (fk_persona_cliente) REFERENCES persona_cliente(clave)
);

CREATE TABLE persona_destinatario (
	clave serial PRIMARY KEY,
	primer_nombre varchar(20) NOT NULL,
	segundo_nombre varchar(20),
	primer_apellido varchar(20) NOT NULL,
	segundo_apellido varchar(20),
	telefono varchar(12) NOT NULL,
	correo varchar(40) NOT NULL,
	fk_persona_cliente integer NOT NULL,
	FOREIGN KEY (fk_persona_cliente) REFERENCES persona_cliente(clave)
);

CREATE TABLE notificacion (
	clave serial PRIMARY KEY,
	nombre varchar(15),
	descripcion varchar(256),
	fk_usuario integer NOT NULL,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(clave)
);

--------------------------
------------------- Usuarios
--------------------------

---------------------------
------------------- Envios 
---------------------------

CREATE TABLE tipo_envio(
	clave serial PRIMARY KEY,
	nombre varchar(20) NOT NULL,
	descripcion varchar(256) NOT NULL,
	tarifa_base numeric(6,2) NOT NULL
);

CREATE TABLE seguro(
	clave serial PRIMARY KEY,
	nombre varchar(20) NOT NULL,
	descripcion varchar(256) NOT NULL,
	tarifa numeric(8,2) NOT NULL
);

---------------------------
------------------- Envios
---------------------------

---------------------------
------------------- Lugares
---------------------------

CREATE TABLE configuracion_simulacion(
	clave serial PRIMARY KEY,
	tiempo_inicio numeric(3,1) NOT NULL
);

CREATE TABLE lugar(
	clave serial PRIMARY KEY,
	direccion text NOT NULL,
	altitud numeric(50,10),
	longitud numeric(50,10),
	zip integer
);


CREATE TABLE oficina(
	clave serial PRIMARY KEY,
	nombre varchar(20) NOT NULL,
	fk_lugar integer NOT NULL,
	FOREIGN KEY (fk_lugar) REFERENCES	lugar(clave)
);

---------------------------
------------------- Lugares 
---------------------------

---------------------------
------------------- Envios 
---------------------------

CREATE TABLE envio (
	clave serial PRIMARY KEY,
	N_rastreo integer NOT NULL,
	fk_usuario integer NOT NULL,
	fk_seguro integer NOT NULL,
	fk_configuracion_simulacion integer NOT NULL,
	fk_persona_destinatario integer NOT NULL,
	fk_tipo_envio integer NOT NULL,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(clave),
	FOREIGN KEY (fk_seguro) REFERENCES seguro(clave),
	FOREIGN KEY (fk_configuracion_simulacion) REFERENCES configuracion_simulacion(clave),
	FOREIGN KEY (fk_persona_destinatario) REFERENCES persona_destinatario(clave),
	FOREIGN KEY (fk_tipo_envio) REFERENCES tipo_envio(clave)
);

---------------------------
------------------- Envios
---------------------------

---------------------------
------------------- Lugares
---------------------------

CREATE TABLE trayecto (
	clave serial PRIMARY KEY,
	fecha_inicial timestamp NOT NULL,
	fecha_final timestamp NOT NULL,
	distancia numeric(8,2) NOT NULL, -- especificar unidad
	fk_oficina_origen integer,
	fk_lugar_origen integer,
	fk_lugar_destino integer,
	fk_envio integer NOT NULL,
	FOREIGN KEY (fk_oficina_origen) REFERENCES oficina(clave),
	FOREIGN KEY (fk_lugar_origen) REFERENCES lugar(clave),
	FOREIGN KEY (fk_lugar_destino) REFERENCES lugar(clave),
	FOREIGN KEY (fk_envio) REFERENCES envio(clave)
);

---------------------------
------------------- Lugares
---------------------------

---------------------------
------------------- Envios 
---------------------------

CREATE TABLE parametro (
	clave serial PRIMARY KEY,
	nombre varchar(20) NOT NULL,
	unidad varchar(15) NOT NULL,
	valor_maximo numeric(8,2),
	valor_minimo numeric(8,2),
	fk_parametro integer,
	FOREIGN KEY (fk_parametro) REFERENCES parametro(clave)
);

CREATE TABLE empaque (
	clave serial PRIMARY KEY,
	nombre varchar(30) NOT NULL,
	descripcion varchar(256) NOT NULL,
	alto numeric(5,2), -- especificar unidad
	ancho numeric(5,2) NOT NULL, -- especificar unidad
	largo numeric(5,2) NOT NULL, -- especificar unidad
	precio numeric(8,2) NOT NULL
);

CREATE TABLE paquete (
	clave serial PRIMARY KEY,
	descripcion varchar(256) NOT NULL,
	fk_empaque integer,
	fk_envio integer NOT NULL,
	FOREIGN KEY (fk_empaque) REFERENCES empaque(clave),
	FOREIGN KEY (fk_envio) REFERENCES envio(clave)
);

CREATE TABLE parametro_paquete (
	clave serial PRIMARY KEY,
	valor numeric(6,2) NOT NULL,
	fk_paquete integer NOT NULL,
	fk_parametro integer NOT NULL,
	FOREIGN KEY (fk_paquete) REFERENCES paquete(clave),
	FOREIGN KEY (fk_parametro) REFERENCES parametro(clave)
);

CREATE TABLE parametro_envio (
	clave serial PRIMARY KEY,
	valor numeric(8,2) NOT NULL,
	fk_envio integer NOT NULL,
	fk_parametro integer NOT NULL,
	FOREIGN KEY (fk_envio) REFERENCES envio(clave),
	FOREIGN KEY (fk_parametro) REFERENCES parametro(clave)
);

---------------------------
------------------- Envios 
---------------------------

---------------------------
------------------- Estatus 
---------------------------

CREATE TABLE estatus(
	clave serial PRIMARY KEY,
	nombre varchar(20) NOT NULL
);

CREATE TABLE estatus_seguro(
	clave serial PRIMARY KEY,
	fecha date NOT NULL,
	fk_seguro integer NOT NULL,
	fk_estatus integer NOT NULL,
	FOREIGN KEY (fk_estatus) REFERENCES estatus(clave),
	FOREIGN KEY (fk_seguro) REFERENCES seguro(clave)
);

CREATE TABLE estatus_envio(
	clave serial PRIMARY KEY,
	fecha date NOT NULL,
	fk_estatus integer NOT NULL,
	fk_envio integer NOT NULL,
	FOREIGN KEY (fk_estatus) REFERENCES estatus(clave),
	FOREIGN KEY (fk_envio) REFERENCES envio(clave)
);

CREATE TABLE estatus_usuario(
	clave serial PRIMARY KEY,
	fecha date NOT NULL,
	fk_estatus integer NOT NULL,
	fk_usuario integer NOT NULL,
	FOREIGN KEY (fk_estatus) REFERENCES estatus(clave),
	FOREIGN KEY (fk_usuario) REFERENCES usuario(clave)
);

CREATE TABLE estatus_tipo_envio(
	clave serial PRIMARY KEY,
	fecha date NOT NULL,
	fk_estatus integer NOT NULL,
	fk_tipo_envio integer NOT NULL,
	FOREIGN KEY (fk_estatus) REFERENCES estatus(clave),
	FOREIGN KEY (fk_tipo_envio) REFERENCES tipo_envio(clave)
);

CREATE TABLE estatus_empaque( 
	clave serial PRIMARY KEY,
	fecha date NOT NULL,
	fk_estatus integer NOT NULL,
	fk_empaque integer NOT NULL,
	FOREIGN KEY (fk_estatus) REFERENCES estatus(clave),
	FOREIGN KEY (fk_empaque) REFERENCES empaque(clave)
);

 CREATE TABLE estatus_oficina(
 	clave serial PRIMARY KEY,
 	fecha date NOT NULL,
 	fk_estatus integer NOT NULL,
 	fk_oficina integer NOT NULL,
 	FOREIGN KEY (fk_estatus) REFERENCES estatus(clave),
 	FOREIGN KEY (fk_oficina) REFERENCES oficina(clave)
 );

CREATE TABLE estatus_notificacion(	
	clave serial PRIMARY KEY,
	fecha date NOT NULL,
	fk_estatus integer NOT NULL,
	fk_notificacion integer NOT NULL,
	FOREIGN KEY (fk_estatus) REFERENCES estatus(clave),
	FOREIGN KEY (fk_notificacion) REFERENCES notificacion(clave)
);

---------------------------
------------------- Estatus
---------------------------