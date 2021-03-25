import { DeepPartial } from '@vendure/common/lib/shared-types';
import { VendureEntity } from '@vendure/core';
import { Column, Entity } from 'typeorm';

@Entity()
export class TokenDetailsEntity extends VendureEntity {
  constructor(input?: DeepPartial<TokenDetailsEntity>) {
    super(input);
  }

  @Column()
  token: string;
  
  @Column()
  monthExp: number;

  @Column()
  yearExp: number;

  @Column()
  approvalNumber: number;

  @Column()
  identityNumber: number;

  @Column()
  cardOwnerName: string;

  @Column()
  cardOwnerEmail: string;

  @Column()
  salt: string;

  @Column()
  cardOwnerId: number;

  @Column()
  cardOwnerPhone: string;
}