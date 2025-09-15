const Hero = "Luffy";
var xp = 100010;


if (xp <= 1000){
      console.log("O nome do seu heroi é: " + Hero + " e está no nivel BRRONZE")
} else if (xp >= 1001 && xp <= 2000){
      console.log("O nome do seu heroi é: " + Hero + " e está no nivel FERRO")  
} else if (xp >= 2001 && xp <= 5000){
      console.log("O nome do seu heroi é: " + Hero + " e está no nivel PRATA")
} else if (xp >= 5001 && xp <= 7000){
      console.log("O nome do seu heroi é: " + Hero + " e está no nivel OURO")
} else if (xp >= 7001 && xp <= 8000){
      console.log("O nome do seu heroi é: " + Hero + " e está no nivel PLATINA")
} else if (xp >= 8001 && xp <= 9000){
      console.log("O nome do seu heroi é: " + Hero + " e está no nivel ASCENDENTE")
} else if (xp >= 9001 && xp <= 10000){
      console.log("O nome do seu heroi é: " + Hero + " e está no nivel IMORTAL")
} else {
      console.log("O nome do seu heroi é: " + Hero + " e está no nivel RADIANTE")
}