INSERT INTO `customers` (`id`, `created_at`, `updated_at`, `firstName`, `lastName`, `email`, `address`) VALUES
('7f75011f-0f0f-4466-95cd-bd6477364c7b',	'2024-03-19 12:12:24.000000',	'2024-03-19 12:12:24.000000',	'Joe',	'Doe',	'joe@doe.com',	'{\"zipCode\": \"12345\", \"streetName\": \"avenue.st\", \"buildingNumber\": \"1a\"}');

INSERT INTO `fleet` (`id`, `created_at`, `updated_at`, `manufacturer`, `license`, `vin`, `rentedById`, `positionId`) VALUES
('29a57665-8c3e-4bc8-930f-f7d32b532a13',	'2024-03-19 14:35:53.193011',	'2024-03-19 14:35:53.193011',	'bentley',	'US-12345',	'1234567890',	'7f75011f-0f0f-4466-95cd-bd6477364c7b',	'29a57665-8c3e-4bc8-930f-f7d32b532a13'),
('55e9a1b7-a265-4d0d-986e-14cb2f619eac',	'2024-03-19 14:28:14.224767',	'2024-03-19 14:28:14.224767',	'bentley',	'US-67890',	'0987654321',	NULL,	'55e9a1b7-a265-4d0d-986e-14cb2f619eac');

INSERT INTO `tracking` (`id`, `position`, `updated_at`) VALUES
('29a57665-8c3e-4bc8-930f-f7d32b532a13',	'{\"zipCode\": \"12345\", \"streetName\": \"avenue.st\", \"buildingNumber\": \"1a\"}',	'2024-03-19 14:35:32.632963'),
('55e9a1b7-a265-4d0d-986e-14cb2f619eac',	'{\"zipCode\": \"54321\", \"streetName\": \"lincoln\", \"buildingNumber\": \"3B\"}',	'2024-03-19 14:28:14.194892');
