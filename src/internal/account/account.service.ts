import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import {
    GetUsersByFiltersParam,
    GetUsersResponse,
    VerificatonParams,
} from './account.types';

@Injectable()
export class InternalAccountService {
    constructor (
        private readonly config: ConfigService,
        private readonly httpService: HttpService,
    ) {}

    async verification(
        params: VerificatonParams,
    ): Promise<boolean> {
        const url = `${this.config.get('ACCOUNT_URL')}/v1/user/verification`;
        const res = await this.httpService.axiosRef.get(url, { params });

        return res.data;
    }

    async GetUsersByFilter(
        params: GetUsersByFiltersParam,
    ): Promise<GetUsersResponse> {
        const url = `${this.config.get('ACCOUNT_URL')}/v1/user`;
        const res = await this.httpService.axiosRef.get(url, { params });

        return res.data;
    }
}
