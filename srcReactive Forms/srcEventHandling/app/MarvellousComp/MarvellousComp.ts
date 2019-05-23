import { Component } from "@angular/core";

@Component({
    selector: 'app-MarvellousComp',
    templateUrl: './MarvellousComp.html'
})

export class MarvellousComp
{
    // Characterstics to display event informatoin
    str:string = "Marvellous before Button click";

    // Event handler gets called when we press the button
    fun()
    {
        this.str = "Marvellous After Button click";
    }
}