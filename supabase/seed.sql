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



--
-- Data for Name: meetings; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."meetings" ("id", "title", "description", "type", "starts_at", "ends_at", "meeting_url", "is_published", "created_by", "created_at", "updated_at") VALUES
	('4bce1130-37fa-47c1-aa35-877425ee2992', 'Fresh Starts – New Toastmasters Year, New Goals', 'Kick off a brand new Toastmasters year with fresh energy and renewed goals. This meeting will feature prepared speeches on growth and ambition, impromptu speaking exercises, and supportive evaluations to help you start the year strong. Whether you''re setting your first speaking goal or your fiftieth, come ready to grow.', 'virtual', '2026-07-03 02:00:00+00', NULL, NULL, true, NULL, '2026-08-25 03:43:22.71405+00', '2026-08-25 03:43:22.71405+00'),
	('37288038-3fcb-4e02-842d-9b185546f312', 'Chocolate Day – Sweet Stories & Guilty Pleasures', 'Indulge in an evening of sweet stories and guilty-pleasure confessions. This meeting features prepared speeches, table topics, and evaluations, all with a playful chocolate-themed twist. Come share the stories that make you smile and sharpen your speaking skills in a fun, welcoming environment.', 'virtual', '2026-07-10 02:00:00+00', NULL, NULL, true, NULL, '2026-08-25 03:43:22.71405+00', '2026-08-25 03:43:22.71405+00'),
	('80104328-fddd-4043-996a-731db3a25827', 'Ice Cream Day – Cool Ideas & Sweet Memories', 'Cool down with an evening of fresh ideas and sweet memories. This meeting will feature prepared speeches, impromptu table topics, and thoughtful evaluations, all wrapped in a lighthearted ice cream theme. Join us in person for a fun, flavorful take on building your communication skills.', 'hybrid', '2026-07-17 02:00:00+00', NULL, NULL, true, NULL, '2026-08-25 03:43:22.71405+00', '2026-08-25 03:43:22.71405+00'),
	('58a4c055-4039-479f-98cc-bfcb266e1408', 'Gorgeous Grandma Day – Celebrating Wisdom, Grace & Timeless Stories', 'Celebrate the wisdom, grace, and timeless stories that come with experience. This meeting features prepared speeches, table topics, and evaluations centered on the lessons we carry forward. Come share your own stories and learn from the perspectives of others in a warm, welcoming setting.', 'virtual', '2026-07-24 02:00:00+00', NULL, NULL, true, NULL, '2026-08-25 03:43:22.71405+00', '2026-08-25 03:43:22.71405+00'),
	('36b1c169-8e15-470c-a5e0-d6d8cf920eec', 'Moments of Truth – Building Better Clubs', 'Explore what it takes to build a stronger, more effective club. This meeting focuses on the Moments of Truth that shape a member''s experience, with discussion, prepared speeches, and evaluations aimed at continuous improvement. Come help shape the future of our club.', 'virtual', '2026-07-31 02:00:00+00', NULL, NULL, true, NULL, '2026-08-25 03:43:22.71405+00', '2026-08-25 03:43:22.71405+00'),
	('420e6380-2fa5-448d-840b-09d2b0b007de', 'Lighthouse Day – Guiding Others Through Leadership', 'Learn what it means to guide others through leadership, just like a lighthouse guides ships safely home. This meeting features prepared speeches on leadership principles, impromptu speaking exercises, and comprehensive evaluations. Come develop the skills to lead with clarity and confidence.', 'virtual', '2026-08-07 02:00:00+00', NULL, NULL, true, NULL, '2026-08-25 03:43:22.71405+00', '2026-08-25 03:43:22.71405+00'),
	('5d953413-8001-4eba-b0d9-e5f3d85d39b7', 'Mythical Creatures Contest – Legends Come to Life', 'Bring your imagination to life in our Mythical Creatures speech contest. Members will compete with prepared speeches judged by contest criteria, alongside table topics and evaluations for non-competing members. Join us for an evening of storytelling, creativity, and friendly competition.', 'virtual', '2026-08-14 02:00:00+00', NULL, NULL, true, NULL, '2026-08-25 03:43:22.71405+00', '2026-08-25 03:43:22.71405+00'),
	('767be83e-864f-4609-bb34-617f8429f77d', 'Better Speaker Series – Becoming a More Effective Speaker', 'Focus on becoming a more effective speaker with this installment of our Better Speaker Series. This meeting features prepared speeches, targeted feedback, and evaluations designed to help you refine your delivery and connect with any audience. Join us in person for hands-on skill building.', 'hybrid', '2026-08-21 02:00:00+00', NULL, NULL, true, NULL, '2026-08-25 03:43:22.71405+00', '2026-08-25 03:43:22.71405+00'),
	('8c2c8fa6-3ccb-46d3-9b6e-89b3012b47cb', 'Bow Tie Day – Dress Sharp, Speak Sharper', 'Dress sharp and speak sharper at this meeting themed around confidence and polish. Enjoy prepared speeches, impromptu table topics, and supportive evaluations, all with a bow tie flair. Come show off your style and sharpen your speaking skills in equal measure.', 'virtual', '2026-08-28 02:00:00+00', NULL, NULL, true, NULL, '2026-08-25 03:43:22.71405+00', '2026-08-25 03:43:22.71405+00'),
	('259f1882-f0af-4e23-b0bd-c2ca6a3c47e5', 'President''s Toast & Roast – John Fox Edition', 'Join us in person for a special evening honoring President John Fox with toasts, roasts, and reflections. This meeting blends celebration with prepared speeches and table topics, offering a lighthearted look back at a year of leadership. Come share your favorite memories and well wishes.', 'hybrid', '2026-09-04 02:00:00+00', NULL, NULL, true, NULL, '2026-08-25 03:43:22.71405+00', '2026-08-25 03:43:22.71405+00'),
	('9c7183cb-91fc-4abb-a1a5-143a231aab62', 'Teddy Bear Day – Comfort, Kindness & Connection', 'Bring comfort, kindness, and connection to this meeting inspired by Teddy Bear Day. Enjoy prepared speeches, table topics, and evaluations centered on the small gestures that build strong relationships. Come for an evening of warmth and supportive feedback.', 'virtual', '2026-09-11 02:00:00+00', NULL, NULL, true, NULL, '2026-08-25 03:43:22.71405+00', '2026-08-25 03:43:22.71405+00'),
	('5bd7c22b-07b4-4bfe-8ce0-186d1766fc14', 'Talk Like a Pirate Day – Speak with Adventure', 'Set sail for an evening of adventure as we talk like pirates and speak with boldness. This meeting features prepared speeches, impromptu table topics, and evaluations, all in the spirit of fearless communication. Join us in person for a swashbuckling good time.', 'hybrid', '2026-09-18 02:00:00+00', NULL, NULL, true, NULL, '2026-08-25 03:43:22.71405+00', '2026-08-25 03:43:22.71405+00'),
	('1776f520-942f-462d-916f-2a9985cc671f', 'Hobbit Day – Every Journey Begins with a Step', 'Every journey begins with a single step, and this meeting celebrates that spirit with a Hobbit Day theme. Enjoy prepared speeches, table topics, and evaluations focused on taking that first brave step forward. Come find the courage to start your next adventure in speaking.', 'virtual', '2026-09-25 02:00:00+00', NULL, NULL, true, NULL, '2026-08-25 03:43:22.71405+00', '2026-08-25 03:43:22.71405+00');


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
