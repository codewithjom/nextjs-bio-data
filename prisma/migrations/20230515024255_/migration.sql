-- CreateTable
CREATE TABLE `Biodata` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `positionDesired` VARCHAR(191) NOT NULL,
    `fullname` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `civilStatus` VARCHAR(191) NOT NULL,
    `cityAddress` VARCHAR(191) NOT NULL,
    `provincialAddress` VARCHAR(191) NOT NULL,
    `cellphone` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `dateOfBrith` VARCHAR(191) NOT NULL,
    `birthOfPlace` VARCHAR(191) NOT NULL,
    `citizenship` VARCHAR(191) NOT NULL,
    `height` VARCHAR(191) NOT NULL,
    `weight` VARCHAR(191) NOT NULL,
    `religion` VARCHAR(191) NOT NULL,
    `spouse` VARCHAR(191) NULL,
    `spouseOccupation` VARCHAR(191) NULL,
    `father` VARCHAR(191) NULL,
    `fatherOccupation` VARCHAR(191) NOT NULL,
    `mother` VARCHAR(191) NOT NULL,
    `motherOccupation` VARCHAR(191) NOT NULL,
    `language` VARCHAR(191) NOT NULL,
    `emergencyContact` VARCHAR(191) NOT NULL,
    `emergencyAddress` VARCHAR(191) NOT NULL,
    `elementary` VARCHAR(191) NULL,
    `elementaryGrad` VARCHAR(191) NULL,
    `highschool` VARCHAR(191) NULL,
    `highschoolGrad` VARCHAR(191) NULL,
    `college` VARCHAR(191) NULL,
    `collegeGrad` VARCHAR(191) NULL,
    `degree` VARCHAR(191) NULL,
    `specialSkills` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Children` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `birth` VARCHAR(191) NOT NULL,
    `biodataId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EmploymentRecord` (
    `id` VARCHAR(191) NOT NULL,
    `companyName` VARCHAR(191) NULL,
    `position` VARCHAR(191) NULL,
    `positionFrom` VARCHAR(191) NULL,
    `positionTo` VARCHAR(191) NULL,
    `biodataId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CharacterReference` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `company` VARCHAR(191) NOT NULL,
    `position` VARCHAR(191) NOT NULL,
    `contact` VARCHAR(191) NOT NULL,
    `biodataId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Children` ADD CONSTRAINT `Children_biodataId_fkey` FOREIGN KEY (`biodataId`) REFERENCES `Biodata`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EmploymentRecord` ADD CONSTRAINT `EmploymentRecord_biodataId_fkey` FOREIGN KEY (`biodataId`) REFERENCES `Biodata`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CharacterReference` ADD CONSTRAINT `CharacterReference_biodataId_fkey` FOREIGN KEY (`biodataId`) REFERENCES `Biodata`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
