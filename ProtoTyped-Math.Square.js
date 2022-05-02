
"use-strict";

const decimal = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let adress_index = [], position = 0, counted_one = 0, primes_dividers = [];

Quadratic_Equation(12, 12000, 8); // Change values here, they're respectively the coeficients at a Quadratic Equation.

// Analysing if a number is a floating point.

function floating_point(user_input, type) {
	
 let stringfied = ""; stringfied += user_input;
	
  if(type === "first-option") {
	
    for(let index = 0; index < stringfied.length; index += 1)
     if(stringfied[index] === '.')
       return true;
	 	  
	 return false;
 }
 else {
 	 
   stringfied = "";
 	 
   let current_value; where = [], location = 0;
     for(let cluster = 0; cluster < user_input.length; cluster += 1) {
       current_value = user_input[cluster]; stringfied += current_value;
 	 	  
 	for(let inner = 0; inner < stringfied.length; inner += 1) {
 	 if(stringfied[inner] === '.') {
 	 	    
 	   where[location] = cluster;
 	    location += 1;
 	 	     
 	 break;
     }
  }
     stringfied = "";
 	 }
 	 	
  if(where.length != 0 && where.length != undefined) {
    let informations = [true, where]; 
 	 	  
  return informations;
 	 
  } else if(where.length === undefined || where.length === 0) {
      let information = [false];
 	    
  return information;
        }
    }
}

// This is where I get all the dividers of a given number. All dividers ain't needed though.

function get_primes_dividers_of(choose_number, covering, spot) {
  let primes = [], primes_adresses = 0;
	
    if(choose_number === 0) {
		
       primes[0] = 0;
	 
	 return primes[0];
}
  choose_number < 0 ? choose_number *= (- 1): choose_number *= 1;
  
     for(let adress_point = 0; (choose_number / (adress_point + 1)) > (choose_number / (choose_number + 1)); adress_point += 1)                     //
	 
       if((choose_number % (adress_point + 1)) === 0 || (choose_number / (adress_point + 1)) === 1) {
	 	
	 primes_adresses += 1;
	     
	 primes[(primes_adresses - 1)] = (adress_point + 1);
	  
       if(primes_adresses === 2) // This line takes off way much the subsystems performance, it is not a must-include feature though. Here I specify that i just wanna get up to the second lowest divider.
      break; 
 }
// Some important specifications. 
  if((covering === 1 && (((spot != undefined && spot != 0) && (spot < (primes.length + 1)) || (spot > primes.length))) || (covering === 1 && (spot === undefined || spot === 0)))) {
  	
   if(covering === 1 && spot === undefined) {
   
     return primes;
     
} else if(covering === 1 && ((spot != undefined && spot != 0) && (spot < (primes.length + 1)))) {
       
    return primes[spot - 1];
    
} else if(covering === 1 && ((spot != undefined && spot != 0) && (spot > primes.length))) {
       
   process.stdout.write("\n> The " + spot + "th Element doesn't exist or isn't probably assigned into yet.\n\n> Elements that are stored are only these. ● ");
    return primes;
       
} else if(covering === 1 && spot === 0) {
    	 
   process.stdout.write("\n> There's no element at this position, the first one's at the " + (spot + 1) + "th position inside the collections.\n> Those are the elements inside >> ");
    	  
     return primes;
  }
} else if(((covering === undefined || covering === 0 || (covering != 1 && covering != 0)) && (spot === 0 || spot === 1 || spot === undefined)) || (covering === undefined && spot === undefined) || spot === 0) {
  	
     process.stdout.write("\n> No covering set. The only one accepatable value is (1) for this feature. Thus, nothing specifically was brought up. ● ");
	  
       console.log(primes);
	    
	 return '\0';
	
} else if((covering || spot) != (((covering === undefined || covering === 0 || (covering != 1 && covering != 0)) && (spot === 0 || spot === 1 || spot === undefined)) || (covering === undefined && spot === undefined) || spot === 0)) {
  	
    process.stdout.write("\n> No preferences set, so there're no elements to show.\n");
    return '\0';
 }
}

//

function Get_sqr_root(quantity, type, primes_factors) {
  let sqr = 6;
	
  if(type === true) {
	 	
    for(let times = 0; times < ((quantity / 2) - 1); times += 1)
      sqr *= 6;
	 	   
	return sqr;
	 	 
} else if(type != true) {
	 		
    sqr = primes_factors[0];
	 		
    for(let times = 0; times < (quantity - 1); times += 1) {
       sqr *= primes_factors[2 * (times + 1)];
}
	 		
     return sqr;
   }
}

// This is responsible for analysing perfect squares of numbers.	

function is_square(square, which_one) {

  let tmp_square = square;

// This is responsible for analysing perfect squares of numbers that are divisible by 6.
function is_alike_to_six(six, specify) {
		
  let how_many_times = 0;

  if(six < 0) {
    return false;
}
   if((six % 6) === 0 && (six / 6) >= 6) {
		
     for(let times = 0; ((six / 6) != 1 && (six / 6 >= 6)); times += 1) {
		    	
       how_many_times = (times + 1);
		    	
       if(((six / 6) / 6) === 1) {
	six = (six / 6) / 6;
	 how_many_times += 1;
	  break;
      }
	six /= 6;
    }	
} else
   return false;
		   
    if((how_many_times % 2) === 0 && six === 1) {
			
      if(specify != false)
        return how_many_times;

  else if(specify === false)	
   return true;
	
     } else if((how_many_times % 2) != 0 && six != 1);
	return false;
  }
	
  let square_data_collection = [];
  
 function is_equal(sweepping_elements, second_option, return_type) {
   let status = true;
   	 
    if(second_option != true) {
   	 
      for(let index_of = 0; index_of < (sweepping_elements.length - 1); index_of += 1)
   	  	
   	 if(sweepping_elements[index_of] != sweepping_elements[index_of + 1]) {
   	 status = false;
   	  		
   	   return status;	
   	 }
    return status;
   	 	
  } else {
     let tmp_accounting = 0;
   		  
     if(sweepping_elements[0] === sweepping_elements[1]) {
   		    	
       for(let pair = 0; pair < (sweepping_elements.length - 1); pair += 2) {
   		    	 	
   	 if(sweepping_elements[pair] === sweepping_elements[pair + 1]) {
   		    	 	  	
            tmp_accounting += 1; 	 	  	
     } 	 	
  }
   	 		  
 } if(tmp_accounting === (sweepping_elements.length / 2)) {
   		  
   if(return_type === "quantity")
    return tmp_accounting;
   		   
    return true;
   		 
    } else
       return false;
  }
}// main Core - Squares Calculus.
   if((square < (- 1) && (square % 2 != 0 && square != ((get_primes_dividers_of(square, 1, 2) * get_primes_dividers_of(square, 1, 2)) * - 1))) || square > 1) {
	
   if((is_alike_to_six(square, false)) != false) {
     return Get_sqr_root(is_alike_to_six(square, true), true);
		
} else if((square / get_primes_dividers_of(square, 1, 2)) != 1 && (square / get_primes_dividers_of(square, 1, 2)) != -1 ) {
   	
    for(let turn = 0; (square / get_primes_dividers_of(square, 1, 2)) / get_primes_dividers_of(square, 1, 2) != 1 || (square / get_primes_dividers_of(square, 1, 2)) / get_primes_dividers_of(square, 1, 2) != -1; turn += 1) {
   
   	square_data_collection[turn] = get_primes_dividers_of(square, 1, 2);
   	square /= get_primes_dividers_of(square, 1, 2);
   	 	 
   	if(((square / get_primes_dividers_of(square, 1, 2)) === 1) || ((square / get_primes_dividers_of(square, 1, 2)) === -1)) {
   	 	 	
   	square_data_collection[turn + 1] = get_primes_dividers_of(square, 1, 2);
   	square /= get_primes_dividers_of(square, 1, 2);
   	 	 	 		
   	 break;
        }
    }
} else if((square / get_primes_dividers_of(square, 1, 2)) === 1 || ((square / get_primes_dividers_of(square, 1, 2)) === - 1))
    square_data_collection[0] = get_primes_dividers_of(square, 1, 2);
		    
} else if(square === -1 || square === 0 || square === 1) {
	    
    if(square === 1)
     square_data_collection[0] = 1;
	   
  else if(square === 0) {
    square_data_collection[0] = 0;
	        
       return square_data_collection[0];
} else
   square_data_collection[0] = square;
	     
} else if(((square / get_primes_dividers_of(square, 1, 2)) === 1) || ((square / get_primes_dividers_of(square, 1, 2)) === -1)) {
   square > 0 ? square_data_collection[0] = get_primes_dividers_of(square, 1, 2) : square_data_collection[0] = get_primes_dividers_of(square, 1 , 2) * -1;
	
} else if((square % 2) === 0 || square === ((get_primes_dividers_of(square, 1, 2) * get_primes_dividers_of (square, 1, 2)) * -1))
   square_data_collection[0] = square;
		 
     if((square_data_collection.length % 2) != 0) {
	
       square = tmp_square;
	 
     if(square_data_collection[0] === 1 || square === 0)
       return square_data_collection[0];
   
  else if(square < 0)
    return false;
  
   else 	 
    return closer_square(square).toFixed(1);
   
} else if((square_data_collection.length % 2) === 0 && square_data_collection.length != 0) {
   	
    if(is_equal(square_data_collection, false) != false || is_equal(square_data_collection, true) != false) {
	
      return Get_sqr_root((is_equal(square_data_collection, true, "quantity")), false, square_data_collection);
	  
} else if(is_equal(square_data_collection) != true) {
    	   
    square = tmp_square;
       
     if(square < 0)
       return false
      
     else
       return closer_square(square).toFixed(1);
    }
 }
  
// It is the main function responsible for calculating the more accurate square of a number that isn't a perfect square.

function closer_square(Square) {
  	
    let CLOSER_sqr;
    	   
     for(let times = 1.0; ((times * times) < Square); times += 0.116)
       CLOSER_sqr = times;
    	     
    return CLOSER_sqr;
  }
}

// It's part of the function that verifies if a given char is a special char or not.

function numerical(sequence) {

 for(let index = 0; index < sequence.length; index += 1) {
		 
   for(let decimal_Index = 0; decimal_Index < decimal.length; decimal_Index += 1) {
			  
     if((sequence[index] % decimal[decimal_Index]) <= 0 || (sequence[index] % decimal[decimal_Index]) >= 0)
  	  
  counted_one += 1;
  
  else
    adress_index[position] = sequence[index], position += 1;
	  	     
  }
}
  if(counted_one != (((sequence.length - (sequence.length - 1)) * decimal.length) * sequence.length))
    return false;
	 
  return true;
}

// This is responsible for arranging all special chars that weren't found in sequential order.

function not_real_numbers(array, false_flag) {
	
  if(false_flag != 1) {
	
    for(let array_id = 0; array_id < (position / decimal.length); array_id += 1)
		
      process.stdout.write("(" + (array[array_id + (decimal.length * array_id)]) + ") ");
 
  } else {
  	
     for(let array_id = 0; array_id < array.length; array_id += 1)
           	
       process.stdout.write("(" + array[array_id].toFixed(1) + "), ");
  }
  return "";
}

function accounting(array_data, sum) {
	
   for(let element_id = 0; element_id < array_data.length; element_id += 1)
     sum += array_data[element_id];
	
 return sum;
}

// It is responsible for analyzing if a given char is a special character.

function char_set(numbers_set, type) {
	
   if(type === 1) {
    if(numerical(numbers_set) != true)
      return true;		
		
   else 
    return false;

 } else if(type != 1)
    numerical(numbers_set);
}

// It verifies whether a given data type is a number or not.

function is_number(numbers_set) {
	
 for(let index = 0; index < numbers_set.length; index += 1) {
  
   if(((numbers_set[index] / 1) != (((numbers_set[index] / 1) * 1) + (numbers_set[index] % 1))))
  	 
     return true;
  }
	
   return false;
	
}

// main

function quadratic_equation(coeficients) {
	
// This is a complimentary conversion function set up only for a special cases.
	
function special_case_of(unique) {
		
  let one = 1;
		
    if(unique == one) {
      unique = one;
			
    return unique;
		
} else if(unique == (one * -1)) {
    unique = (one * -1);
			
	return unique;
    }
  }
	
   let float_dumper = floating_point(coeficients, "second-option"); //go to verify if it is also something undefined... or a string...
	
   let valid_amount = 0;
	
// Analyzing if something's undefined yet.
  for(let quantity = 0; quantity < coeficients.length; quantity += 1) {
		
  let intermediate = ""; intermediate += coeficients[quantity];
		
  if(coeficients[quantity] != undefined && intermediate != "undefined") {
     valid_amount += 1;
   }
 }
 
 if(valid_amount === 3) {
 	
   if(float_dumper[0] != false) {
 		
     process.stdout.write("\n● - Infelizmente ainda não suportamos números com ponto flutuante, por isso, da sequência a seguir, ou apenas a sua parte inteira será processada, ou o número será integralmente arredondado. ●\n");
     process.stdout.write("\n● - [ ");
 		
// Converting floating point numbers into its integer part.
 for(let cluster = 0; (cluster < float_dumper[1].length); cluster += 1) {
 			
   process.stdout.write(coeficients[(float_dumper[1][cluster])].toFixed(2) + " ");
 			
     if(floating_point(coeficients[(float_dumper[1][cluster])], "first-option") != false) {
 			 
       if(coeficients[(float_dumper[1][cluster])].toFixed(0) == 1 || coeficients[(float_dumper[1][cluster])].toFixed(0) == -1)
          coeficients[(float_dumper[1][cluster])] = special_case_of(coeficients[(float_dumper[1][cluster])].toFixed(0));
 			 
  else
    coeficients[(float_dumper[1][cluster])] = coeficients[(float_dumper[1][cluster])].toFixed(0);
 	}
    }
 process.stdout.write("] - ●\n");
 }
 	
    if(is_number(coeficients) != true) {
	  
      let delta = ((coeficients[1] * coeficients[1]) - (4 * (coeficients[0] * coeficients[2]))), root = is_square(delta);
	
      let b = coeficients[1], Dois_a = (2 * coeficients[0]);
      let first_root = ((-b + root) / Dois_a), second_root = ((-b - root) / Dois_a);
 
      if((is_square(delta)) === false || (2 * coeficients[0]) === 0) {
	 	 
	 if(delta < 0) {
	 process.stdout.write("\n● Solução indeterminada, pois a expressão quadrática [ ");
	 	 
   	 coeficients[0] === -1 ? process.stdout.write("-x²") : coeficients[0] === 1 ? process.stdout.write("x²") : process.stdout.write(coeficients[0] + "x²");
	 		 
	  if(coeficients[1] < 0) {
	    coeficients[1] === -1 ? process.stdout.write(" -x") : process.stdout.write(" - " + (coeficients[1] * -1) + "x");
	  	 
} else if(coeficients[1] === 0) {
    process.stdout.write(" + " + coeficients[1] + "x");
	  	 
} else {
    coeficients[1] === 1 ? process.stdout.write(" + x") : process.stdout.write(" + " + coeficients[1] + "x");
}	
	  	   
    coeficients[2] < 0 ? process.stdout.write(" - " + coeficients[2] * -1) : process.stdout.write(" + " + coeficients[2]);       
	
	 
    process.stdout.write(" ] possui ∆ (delta) negativo.\n\n○ Delta ∆ = " + delta + "\n");
   }
 else {
    process.stdout.write("\n● Solução impossível, pois a expressão quadrática [ ");
	    
  coeficients[0] === 1 || coeficients[0] === -1 ? process.stdout.write("-x²") : process.stdout.write(coeficients[0] + "x²");
	 
  coeficients[1] < 0 ? process.stdout.write(" - " + (coeficients[1] * -1) + "x") : process.stdout.write(" + " 	+ coeficients[1] + "x");
  coeficients[2] < 0 ? process.stdout.write(" - " + coeficients[2] * -1) : process.stdout.write(" + " + coeficients[2]);       
	    	 
  process.stdout.write(" ] possui [ a = 0 ], portanto o denominador é zero.\n");
  }
} else if(is_square(delta) != false || root === 0) {
	 		
 if((2 * coeficients[0]) === 0) {
	 		 	
    process.stdout.write("\n● Solução impossível, pois a expressão quadrática [ ");
	    
    coeficients[0] === 1 || coeficients[0] === -1 ? process.stdout.write("-x²") : process.stdout.write(coeficients[0] + "x²");
	 
    coeficients[1] < 0 ? process.stdout.write(" - " + (coeficients[1] * -1) + "x") : process.stdout.write(" + " 	+ coeficients[1] + "x");
    coeficients[2] < 0 ? process.stdout.write(" - " + coeficients[2] * -1) : process.stdout.write(" + " + coeficients[2]);       
	    	 
    process.stdout.write(" ] possui [ a = 0 ], portanto o denominador é zero.\n");
	 		 	
 } else {
	 	 
    if(((-b + root) || (-b - root)) === 0) {
        	
       process.stdout.write("\n● Solução determinada, pois a expressão quadrática [ ");
	    
    coeficients[0] === -1 ? process.stdout.write("-x²") : coeficients[0] === 1 ? process.stdout.write("x²") :
    process.stdout.write(coeficients[0] + "x²");
	 		 
  if(coeficients[1] < 0) {
    coeficients[1] === -1 ? process.stdout.write(" -x") : process.stdout.write(" - " + (coeficients[1] * -1) + "x");
	  	 
 } else if(coeficients[1] === 0) {
     process.stdout.write(" + " + coeficients[1] + "x");
	  	 
 } else {
     coeficients[1] === 1 ? process.stdout.write(" + x") : process.stdout.write(" + " + coeficients[1] + "x");
 }	
	  	   
   coeficients[2] < 0 ? process.stdout.write(" - " + coeficients[2] * -1) : process.stdout.write(" + " + coeficients[2]);       
   process.stdout.write(" ] possui [ (-b +/- ✓∆) / 2a ] = 0.\n\n● A única raiz é { 0 }\n");
	 
} else {
      
   process.stdout.write("\n○ Solução determinada, pois a expressão quadrática [ ");
	 	   
   coeficients[0] === -1 ? process.stdout.write("-x²") : coeficients[0] === 1 ? process.stdout.write("x²") : process.stdout.write(coeficients[0] + "x²");
	 		 
     if(coeficients[1] < 0) {
       coeficients[1] === -1 ? process.stdout.write(" -x") : process.stdout.write(" - " + (coeficients[1] * -1) + "x");
	  	 
} else if(coeficients[1] === 0) {
   process.stdout.write(" + " + coeficients[1] + "x");
	  	 
} else {
    coeficients[1] === 1 ? process.stdout.write(" + x") : process.stdout.write(" + " + coeficients[1] + "x");
}	
	  	   
    coeficients[2] < 0 ? process.stdout.write(" - " + coeficients[2] * -1) : process.stdout.write(" + " + coeficients[2]);  
	    
    process.stdout.write(" ] possui raízes reais.\n");
    process.stdout.write("\n○ √∆ » √" + delta + " = " + root + "\n");
	    
	    
    if(delta === 0)
      process.stdout.write("\n○ Raíz = ( " + first_root + " )\n");
			
else {
  if((first_root === 0 || first_root === -0) && (second_root === 0 || second_root === -0)) {
	    	
     process.stdout.write("\n\n○ Raiz = ( ");
	   
	 if(first_root === 0)
	   process.stdout.write(first_root + " )\n");
	      
else if(first_root === -0)
	     
   process.stdout.write(first_root * -1) + " )\n";	
}
	    	
  else {
	 		    
    if(first_root === 0 && second_root === 0) {
	 		    	 
      process.stdout.write("\n○ Raíz = ( 0 )\n");
	 		    	
} else if(first_root === 0 || second_root === 0) {
	 		    	
    process.stdout.write("\n○ Raízes » ( ");
	 		    	  
   first_root === 0 ? process.stdout.write("0 e ") : process.stdout.write(first_root + " e ");
  second_root === 0 ? process.stdout.write("0 )\n") : process.stdout.write(second_root + " )\n");
	 		    
} else if(first_root != 0 && second_root != 0) {
	 		    
     floating_point (first_root, "first-option") != false ? process.stdout.write("\n○ Raízes » ( " + first_root.toFixed(1) + " e ") : process.stdout.write("\n ○ Raízes ○ ( " + first_root + " e ");
     floating_point(second_root, "first-option") != false ? process.stdout.write(second_root.toFixed(1) + " )\n") : process.stdout.write(second_root + " )\n");  
   }
  }
 }
	 		 
 if((coeficients[0] * (first_root * first_root) + (b * first_root) + coeficients[2]) === 0 || (coeficients[0] * (first_root * first_root) - (b * first_root) + coeficients[2]) === 0 || (coeficients[0] * (second_root * second_root) + (b * second_root) + coeficients[2]) === 0 || (coeficients[0] * (second_root * second_root) - (b * second_root) + coeficients[2]) === 0) {
	 	  
    process.stdout.write("\n○ A expressão acima é uma equação quadrática, considerando todas as raízes.\n");
	 	
 } else
   process.stdout.write("\n○ A expressão acima representa uma equação do segundo grau apenas se ao menos umas das raízes satizfazer a igualdade, caso contrario não é.\n"); 
      }
    }
  }
} else {
	
    char_set(coeficients, 0);
	
    process.stdout.write("\n● - Infelizmente as operações não puderam ser concluídas, pois processamos dados que não são aceitos nesse tipo de operação.\n\n");

    switch(position) {
	    
    case (decimal.length) :
      process.stdout.write(not_real_numbers(adress_index, 0) + "• Esse é o caractere que nós processamos e que não é suportado nesse tipo de operação matemática.\n\n");
	 break;
			   
    default :
      process.stdout.write(not_real_numbers(adress_index, 0) + "• Esses são os caracteres que nós processamos e que não são suportados nesse tipo de operação matemática.\n\n");
	 break;
     }	
   }
	
 } else 
    process.stdout.write("\n● É preciso que haja três valores, respectivamente para os coeficientes (a, b, c).\n");
}

// It is responsible for calling the mainFraime to play in.

function Quadratic_Equation(a, b, c) {
  
  quadratic_equation([a, b, c]);
}
