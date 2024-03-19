INSERT INTO `customers` (`id`, `created_at`, `updated_at`, `firstName`, `lastName`, `email`, `address`) VALUES
('7f75011f-0f0f-4466-95cd-bd6477364c7b',	'2024-03-19 12:12:24.000000',	'2024-03-19 12:12:24.000000',	'Joe',	'Doe',	'joe@doe.com',	'{\"zipCode\": \"12345\", \"streetName\": \"avenue.st\", \"buildingNumber\": \"1a\"}');

INSERT INTO `fleet` (`id`, `created_at`, `updated_at`, `manufacturer`, `license`, `vin`, `rentedBy`) VALUES
('bb289865-6329-4317-9978-41ddaaa092f7',	'2024-03-19 12:14:17.000000',	'2024-03-19 12:14:17.000000',	'bentley',	'US-12345',	'000000000000',	'7f75011f-0f0f-4466-95cd-bd6477364c7b');

INSERT INTO `tracking` (`id`, `position`, `updated_at`) VALUES
('bb289865-6329-4317-9978-41ddaaa092f7',	'{\"zipCode\": \"12345\", \"streetName\": \"avenue.st\", \"buildingNumber\": \"1a\"}',	'2024-03-19 12:14:40.000000');
