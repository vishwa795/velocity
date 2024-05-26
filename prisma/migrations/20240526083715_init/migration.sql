-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(200) NOT NULL,
    `price` DOUBLE NOT NULL,
    `stk_qty` INTEGER NOT NULL,
    `images` JSON NULL,
    `archive` BOOLEAN NOT NULL DEFAULT false,
    `u_at` DATETIME(3) NOT NULL,
    `c_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `supplier_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Supplier` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(200) NOT NULL,
    `archive` BOOLEAN NOT NULL DEFAULT false,
    `u_at` DATETIME(3) NOT NULL,
    `c_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `mobile` VARCHAR(15) NOT NULL,
    `email` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_supplier_id_fkey` FOREIGN KEY (`supplier_id`) REFERENCES `Supplier`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
