function extract(){
    let pIdx = 0;
        let lCIdx = (2*pIdx)+1;
        let rCIdx = (2*pIdx)+2;
        
        this.list.shift();
        if(this.list.length>0){
            this.list.unshift(this.list.pop());
        }

        while(lCIdx<=this.list.length-1){
            let temp;
            if(this.list[lCIdx]>this.list[rCIdx]){
                console.log('form the if block');
                if(this.list[pIdx]<this.list[lCIdx]){
                    temp = this.list[pIdx];
                    this.list[pIdx] = this.list[lCIdx];
                    this.list[lCIdx] = temp;
                    pIdx = lCIdx;
                    lCIdx = (2*pIdx)+1;
                    rCIdx = (2*pIdx)+2;
                }else{
                    return this.list;
                }
            }
            else if(this.list[lCIdx]<this.list[rCIdx]){
                console.log('from the else if block');
                if(this.list[rCIdx]>this.list[pIdx]){
                    temp = this.list[pIdx];
                    this.list[pIdx] = this.list[rCIdx];
                    this.list[rCIdx] = temp;
                    pIdx = lCIdx;
                    lCIdx = (2*pIdx)+1;
                    rCIdx = (2*pIdx)+2;
                }else{
                    return this.list;
                }
            }else{
                if(this.list[pIdx]<this.list[lCIdx]){
                    temp = this.list[pIdx];
                    this.list[pIdx] = this.list[lCIdx];
                    this.list[lCIdx] = temp;
                }
                break;
            }
    
        }
        return this.list;
}