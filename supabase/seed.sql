SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- \restrict iGn2Woh7GN1bqvkryklll0mYRWC5GOHFtc7lIW5F9GdrGp7Y09g1YEbf9XSELHf

-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: custom_oauth_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', '1bf23a52-9b0e-4490-9c11-ec7f24ad1400', 'authenticated', 'authenticated', 'test.user@bitsnspeeches.dev', '$2a$10$qNAzUlBDZ7wKlwkTxOQoUeRKrGHDo1JrjImY1ICmjPoOoRONFb98y', '2026-08-03 09:29:06.362609+00', NULL, '', NULL, '', NULL, '', '', NULL, '2026-08-03 09:30:55.381389+00', '{"provider": "email", "providers": ["email"]}', '{"name": "Test User", "role": "member", "email_verified": true}', NULL, '2026-08-03 09:29:06.310924+00', '2026-08-04 09:02:22.516015+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('1bf23a52-9b0e-4490-9c11-ec7f24ad1400', '1bf23a52-9b0e-4490-9c11-ec7f24ad1400', '{"sub": "1bf23a52-9b0e-4490-9c11-ec7f24ad1400", "email": "test.user@bitsnspeeches.dev", "email_verified": false, "phone_verified": false}', 'email', '2026-08-03 09:29:06.343494+00', '2026-08-03 09:29:06.343566+00', '2026-08-03 09:29:06.343566+00', 'a36138d9-c3d9-4943-9ca0-85fb7666cc6f');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: oauth_clients; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: oauth_authorizations; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: oauth_client_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: oauth_consents; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: webauthn_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: webauthn_credentials; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



-- Representative meetings use offsets from the seed date so they remain upcoming
-- whenever the local database is recreated.
INSERT INTO public.meetings (
  id,
  title,
  description,
  type,
  starts_at,
  ends_at,
  meeting_url,
  is_published
)
SELECT
  id,
  title,
  description,
  type::public.meeting_type,
  (
    (CURRENT_DATE + start_offset)::timestamp + time '19:00'
  ) AT TIME ZONE 'America/Los_Angeles',
  (
    (CURRENT_DATE + start_offset)::timestamp + time '20:30'
  ) AT TIME ZONE 'America/Los_Angeles',
  meeting_url,
  true
FROM (
  VALUES
    (
      '4bce1130-37fa-47c1-aa35-877425ee2992'::uuid,
      'Fresh Starts – New Toastmasters Year, New Goals',
      'Kick off a brand new Toastmasters year with fresh energy and renewed goals. Build confidence through prepared speeches, impromptu speaking, and supportive evaluations.',
      'virtual',
      7,
      NULL
    ),
    (
      '37288038-3fcb-4e02-842d-9b185546f312'::uuid,
      'Chocolate Day – Sweet Stories & Guilty Pleasures',
      'Share sweet stories and sharpen your speaking skills in a playful meeting featuring prepared speeches, table topics, and evaluations.',
      'virtual',
      14,
      NULL
    ),
    (
      '80104328-fddd-4043-996a-731db3a25827'::uuid,
      'Ice Cream Day – Cool Ideas & Sweet Memories',
      'Cool down with fresh ideas, sweet memories, prepared speeches, impromptu table topics, and thoughtful evaluations.',
      'hybrid',
      21,
      NULL
    ),
    (
      '58a4c055-4039-479f-98cc-bfcb266e1408'::uuid,
      'Gorgeous Grandma Day – Celebrating Wisdom and Stories',
      'Celebrate the wisdom and timeless stories that come with experience in a warm and welcoming meeting.',
      'virtual',
      28,
      NULL
    ),
    (
      '36b1c169-8e15-470c-a5e0-d6d8cf920eec'::uuid,
      'Moments of Truth – Building Better Clubs',
      'Explore what makes a stronger club through discussion, prepared speeches, and evaluations focused on continuous improvement.',
      'virtual',
      35,
      NULL
    ),
    (
      '420e6380-2fa5-448d-840b-09d2b0b007de'::uuid,
      'Lighthouse Day – Guiding Others Through Leadership',
      'Develop leadership skills through prepared speeches, impromptu speaking exercises, and comprehensive evaluations.',
      'virtual',
      42,
      NULL
    ),
    (
      '767be83e-864f-4609-bb34-617f8429f77d'::uuid,
      'Better Speaker Series – Becoming More Effective',
      'Refine your delivery and connect with your audience through prepared speeches, targeted feedback, and evaluations.',
      'hybrid',
      49,
      NULL
    ),
    (
      '1776f520-942f-462d-916f-2a9985cc671f'::uuid,
      'Every Journey Begins with a Step',
      'Take the next step in your speaking journey with prepared speeches, table topics, and evaluations focused on growth.',
      'in_person',
      56,
      NULL
    )
) AS representative_meetings (
  id,
  title,
  description,
  type,
  start_offset,
  meeting_url
);


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: buckets_analytics; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: buckets_vectors; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: vector_indexes; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 3, true);


--
-- PostgreSQL database dump complete
--

-- \unrestrict iGn2Woh7GN1bqvkryklll0mYRWC5GOHFtc7lIW5F9GdrGp7Y09g1YEbf9XSELHf

RESET ALL;
