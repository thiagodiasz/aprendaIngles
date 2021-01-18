export class Check{
      constructor(
            public verde:boolean,
            public urlCheckVerde: string = '/assets/checkverde.png',
            public urlCheckPreto: string = '/assets/checkpreto.png'

    ){}

    public exibeCheck(): string{



      if(this.verde) {
            return this.urlCheckVerde
        } else{
            return this.urlCheckPreto
        }
    }

}
