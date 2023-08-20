-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 20, 2023 at 02:43 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rapi`
--

-- --------------------------------------------------------

--
-- Table structure for table `charts`
--

CREATE TABLE `charts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `x_data` varchar(255) NOT NULL,
  `y_data` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `charts`
--

INSERT INTO `charts` (`id`, `x_data`, `y_data`, `created_at`, `updated_at`) VALUES
(1, 'PHP', '100', NULL, NULL),
(2, 'MySqli', '90', NULL, NULL),
(4, 'React', '80', NULL, NULL),
(5, 'Opencart', '60', NULL, NULL),
(6, 'Vue Js', '70', NULL, NULL),
(7, 'JavaScript', '95', NULL, NULL),
(12, 'Laravel', '75', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `client_reviews`
--

CREATE TABLE `client_reviews` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_image` varchar(255) NOT NULL,
  `client_title` varchar(255) NOT NULL,
  `client_description` longtext NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `client_reviews`
--

INSERT INTO `client_reviews` (`id`, `client_image`, `client_title`, `client_description`, `created_at`, `updated_at`) VALUES
(1, 'https://image.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg', 'dbUser Name', 'Hi! I\'m Kazi Ariyan. I\'m a web developer with a serious love for teaching I am a founder of eLe easy Learning and a passionate Web Developer, Programmer & Instructor.', NULL, NULL),
(2, 'https://image.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg', 'user Name2', ' Hi! I\'m Kazi Ariyan. I\'m a web developer with a serious love for teaching I am founder of eLe easy Learning and a passionate Web Developer, Programmer & Instructor.', NULL, NULL),
(3, 'https://image.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg', 'user Name 3', 'Hi! I\'m Kazi Ariyan. I\'m a web developer with a serious love for teaching I am a founder of eLe easy Learning and a passionate Web Developer, Programmer & Instructor.', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `contact_email` varchar(255) NOT NULL,
  `contact_message` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `short_title` varchar(255) NOT NULL,
  `short_description` varchar(255) NOT NULL,
  `short_image` varchar(255) NOT NULL,
  `long_title` varchar(255) NOT NULL,
  `long_description` longtext NOT NULL,
  `duration` varchar(255) NOT NULL,
  `lectures` varchar(255) NOT NULL,
  `student` varchar(255) NOT NULL,
  `skill_all` longtext NOT NULL,
  `video_url` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `short_title`, `short_description`, `short_image`, `long_title`, `long_description`, `duration`, `lectures`, `student`, `skill_all`, `video_url`, `created_at`, `updated_at`) VALUES
(1, 'course title', 'this is the short course description for the first course', 'uploads/courses/64e1ff0ecda1d.png', 'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit.', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, soluta eum facilis consequatur aut magni officiis reiciendis cum eius quas voluptas mollitia ex nisi labore placeat earum dignissimos omnis sapiente optio ad, sequi quod impedit sint molestias. Corporis fugit nemo provident totam ipsam quam eius est. Velit, dolorem quae repudiandae et ut excepturi totam perferendis facere corrupti voluptatibus modi. Illum?', '600', '12', '1600', 'course two skills', 'www.youtube.come', NULL, '2023-08-20 08:54:54'),
(2, 'course two title', 'course two description', 'uploads/courses/64e1ff23b2032.png', 'course two long title', 'course two long descriptions', '12', '15', '2121', 'course two skills', 'www.youtube.come', NULL, '2023-08-20 08:55:15'),
(3, 'course short title', 'course short description', 'uploads/courses/64e1ff3449aa2.png', 'course long title', 'course long description', '120', '140', '1510', 'course two skills', 'www.youtube.come', NULL, '2023-08-20 08:55:32');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `footers`
--

CREATE TABLE `footers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `address` text NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `facebook` varchar(255) NOT NULL,
  `twitter` varchar(255) NOT NULL,
  `youtube` varchar(255) NOT NULL,
  `copyright` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `footers`
--

INSERT INTO `footers` (`id`, `address`, `email`, `phone`, `facebook`, `twitter`, `youtube`, `copyright`, `created_at`, `updated_at`) VALUES
(1, '6522 Baltimore National Pike CatonsVille, Califonia USA', 'Support@Ele.Com\r\n\r\n', '434343434', 'https://www.facebook.com/', 'https://www.twitter.com/', 'https://www.youtube.com/', 'Copyright 2016 by easy Learning, All Rights Reserved', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `home_pages`
--

CREATE TABLE `home_pages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `home_title` varchar(255) NOT NULL,
  `home_subtitle` varchar(255) NOT NULL,
  `home_image` varchar(255) NOT NULL,
  `tech_description` longtext NOT NULL,
  `student_count` varchar(255) NOT NULL,
  `lecture_count` varchar(255) NOT NULL,
  `review_count` varchar(255) NOT NULL,
  `video_url` varchar(255) NOT NULL,
  `video_description` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `home_pages`
--

INSERT INTO `home_pages` (`id`, `home_title`, `home_subtitle`, `home_image`, `tech_description`, `student_count`, `lecture_count`, `review_count`, `video_url`, `video_description`, `created_at`, `updated_at`) VALUES
(1, 'EASY LEARNING from EDIT', 'EDIT Learn Professionally', 'uploads/home/64e2091ccc477.jpg', 'EDIT Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsa labore laborum! Rem repellat hic perspiciatis dolorum soluta maiores doloremque sed voluptas impedit quidem. Autem qui itaque illum tempora magnam distinctio debitis repudiandae vero dolores accusantium consequatur error, eos delectus, perferendis\r\n\r\nassumenda, animi eligendi id quas atque nisi libero porro doloremque. Facilis, obcaecati maxime perferendis corrupti rerum fuga cupiditate quod voluptates commodi culpa reprehenderit, dolore aliquam dolores facere, fugiat autem in voluptatibus\r\n\r\nvoluptatum earum itaque magnam ea a consequuntur? Possimus ullam officiis natus blanditiis dolorum expedita deserunt quidem. Non, iure. Reprehenderit quisquam facere dolor, numquam blanditiis repudiandae ea necessitatibus voluptates?', '3000', '120', '200', 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsa labore laborum! Rem repellat hic perspiciatis dolorum soluta maiores doloremque sed voluptas impedit quidem. Autem qui itaque illum tempora magnam distinctio debitis repudiandae vero do', NULL, '2023-08-20 09:37:48');

-- --------------------------------------------------------

--
-- Table structure for table `information`
--

CREATE TABLE `information` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `about` longtext NOT NULL,
  `refund` longtext NOT NULL,
  `terms` longtext NOT NULL,
  `privacy` longtext NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `information`
--

INSERT INTO `information` (`id`, `about`, `refund`, `terms`, `privacy`, `created_at`, `updated_at`) VALUES
(1, 'Hi! I\'m Kazi Ariyan. I\'m a web developer with a serious love for teaching I am a founder of eLe easy Learning and a passionate Web Developer, Programmer & Instructor.\r\n\r\nI am working online for the last 7 years and have created several successful websites running on the internet. I try to create a project-based course that helps you to learn professionally and make you fell as a complete developer. easy learning exists to help you succeed in life.\r\n\r\nEach course has been hand-tailored to teach a specific skill. I hope you agree! Whether you’re trying to learn a new skill from scratch or want to refresh your memory on something you’ve learned in the past, you’ve come to the right place.\r\n\r\nEducation makes the world a better place. Make your world better with new skills.\r\n\r\n', 'refund Hi! I\'m Kazi Ariyan. I\'m a web developer with a serious love for teaching I am a founder of eLe easy Learning and a passionate Web Developer, Programmer & Instructor.\r\n\r\nI am working online for the last 7 years and have created several successful websites running on the internet. I try to create a project-based course that helps you to learn professionally and make you fell as a complete developer. easy learning exists to help you succeed in life.\r\n\r\nEach course has been hand-tailored to teach a specific skill. I hope you agree! Whether you’re trying to learn a new skill from scratch or want to refresh your memory on something you’ve learned in the past, you’ve come to the right place.\r\n\r\nEducation makes the world a better place. Make your world better with new skills.', 'terms Hi! I\'m Kazi Ariyan. I\'m a web developer with a serious love for teaching I am a founder of eLe easy Learning and a passionate Web Developer, Programmer & Instructor.\r\n\r\nI am working online for the last 7 years and have created several successful websites running on the internet. I try to create a project-based course that helps you to learn professionally and make you fell as a complete developer. easy learning exists to help you succeed in life.\r\n\r\nEach course has been hand-tailored to teach a specific skill. I hope you agree! Whether you’re trying to learn a new skill from scratch or want to refresh your memory on something you’ve learned in the past, you’ve come to the right place.\r\n\r\nEducation makes the world a better place. Make your world better with new skills.', 'privacy Hi! I\'m Kazi Ariyan. I\'m a web developer with a serious love for teaching I am a founder of eLe easy Learning and a passionate Web Developer, Programmer & Instructor.\r\n\r\nI am working online for the last 7 years and have created several successful websites running on the internet. I try to create a project-based course that helps you to learn professionally and make you fell as a complete developer. easy learning exists to help you succeed in life.\r\n\r\nEach course has been hand-tailored to teach a specific skill. I hope you agree! Whether you’re trying to learn a new skill from scratch or want to refresh your memory on something you’ve learned in the past, you’ve come to the right place.\r\n\r\nEducation makes the world a better place. Make your world better with new skills.', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2014_10_12_200000_add_two_factor_columns_to_users_table', 1),
(4, '2019_08_19_000000_create_failed_jobs_table', 1),
(5, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(6, '2023_08_08_171441_create_sessions_table', 1),
(7, '2023_08_12_104652_create_services_table', 2),
(8, '2023_08_12_104727_create_information_table', 2),
(9, '2023_08_12_104950_create_courses_table', 2),
(10, '2023_08_12_105019_create_client_reviews_table', 2),
(11, '2023_08_12_105554_create_projects_table', 2),
(12, '2023_08_12_110103_create_contacts_table', 2),
(13, '2023_08_12_110322_create_footers_table', 2),
(14, '2023_08_12_110614_create_home_pages_table', 3),
(15, '2023_08_12_110949_create_charts_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image_one` varchar(255) NOT NULL,
  `image_two` varchar(255) NOT NULL,
  `project_name` varchar(255) NOT NULL,
  `project_description` longtext NOT NULL,
  `project_features` text NOT NULL,
  `project_live` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `image_one`, `image_two`, `project_name`, `project_description`, `project_features`, `project_live`, `created_at`, `updated_at`) VALUES
(1, 'uploads/projects/64e1ddfe01e3a.png', 'uploads/projects/64e1ddfe01e3a.png', 'dbLorem Ipsum Dolor Sit Amet Consectetur Adipisicing.one', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis iste ea nulla accusantium eos soluta iure cum inventore maiores. Iure accusantium maiores hic cupiditate provident nisi deleniti exercitationem deserunt accusamus!', 'Lorem ipsum, dolor sit amet consectetur\r\n\r\nLorem ipsum, dolor sit amet consectetur\r\n\r\nLorem ipsum, dolor sit amet consectetur\r\n\r\nLorem ipsum, dolor sit amet consectetur\r\n\r\nLorem ipsum, dolor sit amet consectetur', 'www.youtube.com', NULL, '2023-08-20 06:33:50'),
(2, 'uploads/projects/64e1de082ea66.png', 'uploads/projects/64e1de082ea66.png', 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing.two', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis iste ea nulla accusantium eos soluta iure cum inventore maiores. Iure accusantium maiores hic cupiditate provident nisi deleniti exercitationem deserunt accusamus!', 'Lorem ipsum, dolor sit amet consectetur\r\n\r\nLorem ipsum, dolor sit amet consectetur\r\n\r\nLorem ipsum, dolor sit amet consectetur\r\n\r\nLorem ipsum, dolor sit amet consectetur\r\n\r\nLorem ipsum, dolor sit amet consectetur', 'www.youtube.com', NULL, '2023-08-20 06:34:00'),
(3, 'uploads/projects/64e1faf8efdf3.png', 'uploads/projects/64e1faf8efdf3.png', 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing.one', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis iste ea nulla accusantium eos soluta iure cum inventore maiores. Iure accusantium maiores hic cupiditate provident nisi deleniti exercitationem deserunt accusamus!', 'Lorem ipsum, dolor sit amet consectetur\r\n\r\nLorem ipsum, dolor sit amet consectetur\r\n\r\nLorem ipsum, dolor sit amet consectetur\r\n\r\nLorem ipsum, dolor sit amet consectetur\r\n\r\nLorem ipsum, dolor sit amet consectetur', 'www.youtube.com', NULL, '2023-08-20 08:37:28'),
(4, 'uploads/projects/64e1de1b9e7ba.png', 'uploads/projects/64e1de1b9e7ba.png', 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing.two', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis iste ea nulla accusantium eos soluta iure cum inventore maiores. Iure accusantium maiores hic cupiditate provident nisi deleniti exercitationem deserunt accusamus!', 'Lorem ipsum, dolor sit amet consectetur\r\n\r\nLorem ipsum, dolor sit amet consectetur\r\n\r\nLorem ipsum, dolor sit amet consectetur\r\n\r\nLorem ipsum, dolor sit amet consectetur\r\n\r\nLorem ipsum, dolor sit amet consectetur', 'www.youtube.com', NULL, '2023-08-20 06:34:19');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `service_name` varchar(255) NOT NULL,
  `service_description` longtext NOT NULL,
  `service_image` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `service_name`, `service_description`, `service_image`, `created_at`, `updated_at`) VALUES
(1, 'Ecommercedb', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 'uploads/services/64e1ddb123c4f.png', NULL, '2023-08-20 06:32:33'),
(2, 'Web Design', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 'uploads/services/64e1ddcb159f8.png', NULL, '2023-08-20 06:32:59'),
(3, 'Web Development', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 'uploads/services/64e1dddbb4c58.png', NULL, '2023-08-20 06:33:15');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('xXspUnaJdJCzbWt1ktBwHlsZqAO0sKOK1FnXeaq2', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiS0wxOEVxN2NGY0dFWVN5WHJkTGJtWUpJZWZLbmRGV2JTWHR5OHluZiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjY6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9ob21lIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTt9', 1692535069);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `two_factor_secret` text DEFAULT NULL,
  `two_factor_recovery_codes` text DEFAULT NULL,
  `two_factor_confirmed_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `current_team_id` bigint(20) UNSIGNED DEFAULT NULL,
  `profile_photo_path` varchar(2048) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `two_factor_secret`, `two_factor_recovery_codes`, `two_factor_confirmed_at`, `remember_token`, `current_team_id`, `profile_photo_path`, `created_at`, `updated_at`) VALUES
(1, 'muhammed', 'muhammed@gmail.com', NULL, '$2y$10$SNDKHaASmf8MCViAO.E9yOjsSAyYmvjG.VU4jgm9wHvVV2Fav/eye', NULL, NULL, NULL, NULL, NULL, NULL, '2023-08-20 06:26:02', '2023-08-20 06:26:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `charts`
--
ALTER TABLE `charts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `client_reviews`
--
ALTER TABLE `client_reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `footers`
--
ALTER TABLE `footers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `home_pages`
--
ALTER TABLE `home_pages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `information`
--
ALTER TABLE `information`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `charts`
--
ALTER TABLE `charts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `client_reviews`
--
ALTER TABLE `client_reviews`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `footers`
--
ALTER TABLE `footers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `home_pages`
--
ALTER TABLE `home_pages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `information`
--
ALTER TABLE `information`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
