import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
@Injectable()

export class MainService {

    campaignId: number = 20;
    partnerId: number = 1;
    tipo: string = 'Direct';


    constructor(private http: Http, private router: Router, private route: ActivatedRoute) {

        this.partnerId = this.route.snapshot.queryParams['partnerId'];
        this.tipo = this.route.snapshot.queryParams['type'];

        if (this.partnerId == null) {
            this.partnerId = 1;
        }
        if (this.tipo == null) {
            this.tipo = 'Direct';
        }

    }
    /**
         * sendLead
         */
    public sendLead(lead) {
        this.http.get(`http://ares.3dm.com.co/bobm/Views/WS/?campaignId=${this.campaignId}&partnerId=${this.partnerId}&type=${this.tipo}&nombre=${lead.nombre}&tel=${lead.tel}&cel=${lead.cel}&email=${lead.email}&ciudad=${lead.ciudad}&ocupacion=${lead.ocupacion}&mensaje=${lead.mensaje}`)
            .subscribe((res: Response) => {
                const backOffice = res;
                console.log(backOffice);
                if (backOffice.ok) {
                    // this.callback = 'Datos enviados correctamente';
                    // this.router.navigate(['/gracias']);
                    console.log('ok');
                } else {
                    //console.log(backOffice);
                    // this.sendingData = false;
                    // this.callback = 'Hubo un error, por favor intentalo de nuevo';
                }
            });
    }

}