import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
@Injectable()

export class MainService {

    campaignId: string = '20';
    tipo: string = 'Direct';

    constructor(private http: Http, private router: Router, private route: ActivatedRoute) {

    }
    /**
         * sendLead
         */
    public sendLead(lead) {
        this.http.get(`http://tin.titularizadora.com/tin/back/?campaignId=${this.campaignId}&partnerId=${lead.partnerId}&type=${this.tipo}&nombre=${lead.nombre}&tel=${lead.tel}&cel=${lead.cel}&email=${lead.email}&ciudad=${lead.ciudad}&ocupacion=${lead.ocupacion}&mensaje=${lead.mensaje}`)
            .subscribe((res: Response) => {
                const backOffice = res;
                console.log(backOffice);
                if (backOffice.ok) {
                    window.location.href = 'http://tin.titularizadora.com/tin/#/thanks';
                } else {
                   alert('Hubo un error al enviar los datos, por favor intentalo de nuevo');
                }
            });
    }
}
