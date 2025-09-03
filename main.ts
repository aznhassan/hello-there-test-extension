//% color=#0000FF 
//% icon="\uf074"
//% block="My Custom Blocks"
namespace custom {
    //% blockId="myFunction" block="myFunction %a %s|"
    //% shim=custom::myFunction
    //% a=number b=number
    export function myFunction(a: number, b: number): number {
        // Per https://github.com/microsoft/pxt-microbit/issues/4292
        return a + b;
    }
}