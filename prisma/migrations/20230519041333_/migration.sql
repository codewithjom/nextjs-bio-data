-- CreateTable
CREATE TABLE `Biodata` (
    `id` VARCHAR(191) NOT NULL,
    `positionDesired` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `fullname` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `cityAddress` VARCHAR(191) NOT NULL,
    `provincialAddress` VARCHAR(191) NOT NULL,
    `telephone` VARCHAR(191) NOT NULL,
    `cellphone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `dateOfBirth` VARCHAR(191) NOT NULL,
    `birthOfPlace` VARCHAR(191) NOT NULL,
    `civilStatus` VARCHAR(191) NOT NULL,
    `citizenship` VARCHAR(191) NOT NULL,
    `height` VARCHAR(191) NOT NULL,
    `weight` VARCHAR(191) NOT NULL,
    `religion` VARCHAR(191) NOT NULL,
    `spouse` VARCHAR(191) NOT NULL,
    `spouseOccupation` VARCHAR(191) NOT NULL,
    `nameOfChildren1` VARCHAR(191) NOT NULL,
    `nameOfChildren2` VARCHAR(191) NOT NULL,
    `nameOfChildren3` VARCHAR(191) NOT NULL,
    `childBirthDate1` VARCHAR(191) NOT NULL,
    `childBirthDate2` VARCHAR(191) NOT NULL,
    `childBirthDate3` VARCHAR(191) NOT NULL,
    `fatherName` VARCHAR(191) NOT NULL,
    `fatherOccupation` VARCHAR(191) NOT NULL,
    `motherName` VARCHAR(191) NOT NULL,
    `motherOccupation` VARCHAR(191) NOT NULL,
    `language` VARCHAR(191) NOT NULL,
    `emergencyContact` VARCHAR(191) NOT NULL,
    `emergencyAddress` VARCHAR(191) NOT NULL,
    `elementary` VARCHAR(191) NOT NULL,
    `elementaryGraduate` VARCHAR(191) NOT NULL,
    `highschool` VARCHAR(191) NOT NULL,
    `highschoolGraduate` VARCHAR(191) NOT NULL,
    `college` VARCHAR(191) NOT NULL,
    `collegeGraduate` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,
    `specialSkills` VARCHAR(191) NOT NULL,
    `companyName1` VARCHAR(191) NOT NULL,
    `empPosition1` VARCHAR(191) NOT NULL,
    `positionFrom1` VARCHAR(191) NOT NULL,
    `positionTo1` VARCHAR(191) NOT NULL,
    `companyName2` VARCHAR(191) NOT NULL,
    `empPosition2` VARCHAR(191) NOT NULL,
    `positionFrom2` VARCHAR(191) NOT NULL,
    `positionTo2` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
