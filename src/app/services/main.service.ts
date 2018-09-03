import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
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
        this.http.get(`http://pruebas.charlsdesigner.com/back/?campaignId=${this.campaignId}&partnerId=${this.partnerId}&type=${this.tipo}&nombre=${lead.nombre}&tel=${lead.tel}&cel=${lead.cel}&email=${lead.email}&ciudad=${lead.ciudad}&ocupacion=${lead.ocupacion}&mensaje=${lead.mensaje}`)
            .subscribe((res: Response) => {
                const backOffice = res;
                console.log(backOffice);
                if (backOffice.ok) {
                    this.router.navigate(['/thanks']);
                    console.log('ok');
                } else {
                   alert('Hubo un error al enviar los datos, por favor intentalo de nuevo');
                }
            });
    }

}