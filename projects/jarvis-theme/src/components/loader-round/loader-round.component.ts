import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoaderRingComponent} from "../loader-ring/loader-ring.component";

@Component({
  selector: 'j-loader-round',
  standalone: true,
    imports: [CommonModule, LoaderRingComponent],
  templateUrl: './loader-round.component.html',
  styleUrls: ['./loader-round.component.scss'],
})
export class LoaderRound implements OnInit{
    private _ringCount: number = 4;
    private _ringWidth: number = 5;
    private _ringSpacing: number = 2;
    private _smallestDiameter: number = 20;

    rings: any[] = [];
    centerSize: number | undefined;

    @Input()
    alternateDirection: boolean = true;
    @Input()
    speedVariation: number = 2;
    @Input()
    center: boolean = false;

    @Input()
    set ringCount(ringCount: number){
        if(ringCount < 0){
            console.error('ring count must be a number greater then 0.')
            throw new Error('ring count must be a number greater then 0.');
        }

        this._ringCount = ringCount
    }

    get ringCount(): number{
        return this._ringCount;
    }

    @Input()
    set ringWidth(ringWidth: number){
        if(ringWidth < 0){
            console.error('ring width must be a number greater then 0.')
            throw new Error('ring count must be a number greater then 0.');
        }

        this._ringWidth = ringWidth
    }

    get ringWidth(): number{
        return this._ringWidth;
    }

    @Input()
    set ringSpacing(ringSpacing: number){
        this._ringSpacing = ringSpacing
    }

    get ringSpacing(): number{
        return this._ringSpacing;
    }

    @Input()
    set smallestDiameter(smallestDiameter: number){
        if(smallestDiameter < 0){
            console.error('ring count must be a number greater then 0.')
            throw new Error('ring count must be a number greater then 0.');
        }

        this._smallestDiameter = smallestDiameter
    }

    get smallestDiameter(): number{
        return this._smallestDiameter;
    }

    ngOnInit(): void {
        if(this.center){
            this.centerSize = this.smallestDiameter + this.ringWidth + this.ringSpacing;
        }

        let size = this._smallestDiameter;
        for (let i = 0; i<this._ringCount; i++){
            size += (this._ringWidth + this._ringSpacing) *2;
            this.rings.push({
                'size': size,
                'state': i%2 === 0 ? 'start' : 'startCounter'
            })
        }
        console.log(this.rings)
    }
}
