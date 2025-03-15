section .data
    mensaje db 'Charlie tiene las estrellas en sus ojos <3', 0Ah 
    longitud equ $ - mensaje

section .text
    global _start

_start:

    mov eax, 4          
    mov ebx, 1          
    mov ecx, mensaje    
    mov edx, longitud   
    int 0x80            

    mov eax, 1          
    xor ebx, ebx        
    int 0x80            
