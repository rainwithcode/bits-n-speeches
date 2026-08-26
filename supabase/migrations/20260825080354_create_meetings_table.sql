alter default privileges for role "postgres" in schema "public" revoke all on sequences from "anon";

alter default privileges for role "postgres" in schema "public" revoke all on sequences from "authenticated";

alter default privileges for role "postgres" in schema "public" revoke all on sequences from "service_role";

alter default privileges for role "postgres" in schema "public" revoke all on tables from "anon";

alter default privileges for role "postgres" in schema "public" revoke all on tables from "authenticated";

alter default privileges for role "postgres" in schema "public" revoke all on tables from "service_role";

create table "public"."meetings" (
  "id"           uuid                     not null default gen_random_uuid(),
  "title"        text                     not null,
  "description"  text,
  "starts_at"    timestamp with time zone not null,
  "ends_at"      timestamp with time zone,
  "meeting_url"  text,
  "is_published" boolean                  not null default false,
  "created_by"   uuid,
  "created_at"   timestamp with time zone not null default now(),
  "updated_at"   timestamp with time zone not null default now(),
  constraint "meetings_pkey" primary key (id)
);

alter table "public"."meetings"
  enable row level security;

create type "public"."meeting_type" as enum (
  'in_person',
  'virtual',
  'hybrid'
);

alter table "public"."meetings"
  add column "type" public.meeting_type not null default 'virtual'::public.meeting_type;

alter table "public"."meetings"
  add constraint "meetings_created_by_fkey" foreign key (created_by) references auth.users(id);

create index meetings_starts_at_idx on public.meetings using btree (starts_at);

create policy "Published meetings are viewable by everyone" on "public"."meetings"
  for select
  to PUBLIC
  using ((is_published = true));

grant delete, insert, maintain, references, select, trigger, truncate, update on table "public"."meetings" to "anon", "authenticated", "postgres", "service_role";

grant usage on type "public"."meeting_type" to "postgres";

alter default privileges for role "postgres" in schema "public" grant select, update, usage on sequences to "anon";

alter default privileges for role "postgres" in schema "public" grant select, update, usage on sequences to "authenticated";

alter default privileges for role "postgres" in schema "public" grant select, update, usage on sequences to "service_role";

alter default privileges for role "postgres" in schema "public" grant execute on FUNCTIONS to "anon";

alter default privileges for role "postgres" in schema "public" grant execute on FUNCTIONS to "authenticated";

alter default privileges for role "postgres" in schema "public" grant execute on FUNCTIONS to "service_role";

alter default privileges for role "postgres" in schema "public" grant delete, insert, maintain, references, select, trigger, truncate, update on tables to "anon";

alter default privileges for role "postgres" in schema "public" grant delete, insert, maintain, references, select, trigger, truncate, update on tables to "authenticated";

alter default privileges for role "postgres" in schema "public" grant delete, insert, maintain, references, select, trigger, truncate, update on tables to "service_role";

