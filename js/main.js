window:onload = () => (function(){
    new Vue({
        el:'#app',
        data:{
            Red:128,
            Green:128,
            Blue:128,
        },
        computed:{
            mixColor:function(){
                var Color = "RGB("+this.Red+","+this.Green+","+this.Blue+")";
                return Color;
            },
            ValidValueCheck:function(){
                if(this.Red < 0){
                    alert("0 ~ 255 の範囲で入力して下さい");
                    this.Red = 0;
                }
                if(this.Green < 0){
                    alert("0 ~ 255 の範囲で入力して下さい");
                    this.Green = 0;
                }
                if(this.Blue < 0){
                    alert("0 ~ 255 の範囲で入力して下さい");
                    this.Blue = 0;
                }
                if(this.Red > 255){
                    alert("0 ~ 255 の範囲で入力して下さい");
                    this.Red = 255;
                }
                if(this.Green > 255){
                    alert("0 ~ 255 の範囲で入力して下さい");
                    this.Green = 255;
                }
                if(this.Blue > 255){
                    alert("0 ~ 255 の範囲で入力して下さい");
                    this.Blue = 255;
                }
                return ;
            }
        },
    })
})();