CREATE TABLE "public"."users" (
  "email" varchar(128) NOT NULL,
  "password" varchar(128) NOT NULL,
  "first_name" varchar(128) NOT NULL,
  "last_name" varchar(128) NOT NULL,
  "is_instructor" bool NOT NULL DEFAULT false
)
;
ALTER TABLE "public"."users" ADD CONSTRAINT "users_pkey" PRIMARY KEY ("email");
INSERT INTO "public"."users" VALUES ('xux8@rpi.edu', 'xux8', 'Adam', 'Xu', 'f');