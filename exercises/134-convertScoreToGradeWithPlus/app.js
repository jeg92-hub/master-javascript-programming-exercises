function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    var res;
    if(score<100 && score>=90){
        res = 'A';
    }else if(score<90 && score>=80){
        res = 'B';
    }else if(score<80 && score>=70){
        res = 'C';
    }else if(score<70 && score>=60){
        res = 'D';
    }else if(score<60 && score>=0){
        res = 'F';
    }else{
        res = 'INVALID SCORE';
    }

    var num = score.toString().split('').pop();
    if(!(score<60 && score>=0)){
        if(num>=0 && num<=2){
            res += "-"
        }else if(num>=8 && num<=9){
            res +="+"
        }
    }

    return res;
}

var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'