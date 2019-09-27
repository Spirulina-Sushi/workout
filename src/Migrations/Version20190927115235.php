<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190927115235 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE articulation (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE body_part (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE equipment (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE exercise (id INT AUTO_INCREMENT NOT NULL, equipment_id INT DEFAULT NULL, position_id INT NOT NULL, name VARCHAR(255) NOT NULL, INDEX IDX_AEDAD51C517FE9FE (equipment_id), INDEX IDX_AEDAD51CDD842E46 (position_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE exercise_movement (exercise_id INT NOT NULL, movement_id INT NOT NULL, INDEX IDX_F2B1351FE934951A (exercise_id), INDEX IDX_F2B1351F229E70A7 (movement_id), PRIMARY KEY(exercise_id, movement_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE movement (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE movement_articulation (movement_id INT NOT NULL, articulation_id INT NOT NULL, INDEX IDX_A5CC6B4D229E70A7 (movement_id), INDEX IDX_A5CC6B4DF9A610DB (articulation_id), PRIMARY KEY(movement_id, articulation_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE movement_body_part (movement_id INT NOT NULL, body_part_id INT NOT NULL, INDEX IDX_2EAC802F229E70A7 (movement_id), INDEX IDX_2EAC802FA515F27A (body_part_id), PRIMARY KEY(movement_id, body_part_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE position (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE exercise ADD CONSTRAINT FK_AEDAD51C517FE9FE FOREIGN KEY (equipment_id) REFERENCES equipment (id)');
        $this->addSql('ALTER TABLE exercise ADD CONSTRAINT FK_AEDAD51CDD842E46 FOREIGN KEY (position_id) REFERENCES position (id)');
        $this->addSql('ALTER TABLE exercise_movement ADD CONSTRAINT FK_F2B1351FE934951A FOREIGN KEY (exercise_id) REFERENCES exercise (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE exercise_movement ADD CONSTRAINT FK_F2B1351F229E70A7 FOREIGN KEY (movement_id) REFERENCES movement (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE movement_articulation ADD CONSTRAINT FK_A5CC6B4D229E70A7 FOREIGN KEY (movement_id) REFERENCES movement (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE movement_articulation ADD CONSTRAINT FK_A5CC6B4DF9A610DB FOREIGN KEY (articulation_id) REFERENCES articulation (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE movement_body_part ADD CONSTRAINT FK_2EAC802F229E70A7 FOREIGN KEY (movement_id) REFERENCES movement (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE movement_body_part ADD CONSTRAINT FK_2EAC802FA515F27A FOREIGN KEY (body_part_id) REFERENCES body_part (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user CHANGE roles roles JSON NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE movement_articulation DROP FOREIGN KEY FK_A5CC6B4DF9A610DB');
        $this->addSql('ALTER TABLE movement_body_part DROP FOREIGN KEY FK_2EAC802FA515F27A');
        $this->addSql('ALTER TABLE exercise DROP FOREIGN KEY FK_AEDAD51C517FE9FE');
        $this->addSql('ALTER TABLE exercise_movement DROP FOREIGN KEY FK_F2B1351FE934951A');
        $this->addSql('ALTER TABLE exercise_movement DROP FOREIGN KEY FK_F2B1351F229E70A7');
        $this->addSql('ALTER TABLE movement_articulation DROP FOREIGN KEY FK_A5CC6B4D229E70A7');
        $this->addSql('ALTER TABLE movement_body_part DROP FOREIGN KEY FK_2EAC802F229E70A7');
        $this->addSql('ALTER TABLE exercise DROP FOREIGN KEY FK_AEDAD51CDD842E46');
        $this->addSql('DROP TABLE articulation');
        $this->addSql('DROP TABLE body_part');
        $this->addSql('DROP TABLE equipment');
        $this->addSql('DROP TABLE exercise');
        $this->addSql('DROP TABLE exercise_movement');
        $this->addSql('DROP TABLE movement');
        $this->addSql('DROP TABLE movement_articulation');
        $this->addSql('DROP TABLE movement_body_part');
        $this->addSql('DROP TABLE position');
        $this->addSql('ALTER TABLE user CHANGE roles roles LONGTEXT NOT NULL COLLATE utf8mb4_bin');
    }
}
