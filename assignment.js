// https://github.com/asif103/js-assignment-1


//solution of the problem 001

function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "Distance cannot be negative!";
    }
    else {
        meter = kilometer * 1000;
        return meter;  
    } 
}


//solution of the problem 002

function budgetCalculator(watch, mobile, laptop) {
    if (watch < 0 || mobile < 0 || laptop < 0) {
        return "Product count cannot be negative";
    }
    else {
        priceOfTOtalWatch = watch * 50;
        priceOfTOtalMobile = mobile * 100;
        priceOfTOtallaptop = laptop * 500;
    
        total = priceOfTOtalWatch + priceOfTOtallaptop + priceOfTOtalMobile;
        return total; 
    }
    
}


//solution of the problem 003

function hotelCost(days) {
    if (days < 0) {
        rent = "Days count cannot be negative";
        
    }
    else if (days <= 10 && days > 0) {
        rent = days * 100;
    }
    else if (days <= 20 && days > 10) {
        rent = 1000+((days -10)*80);
    }
    else {
        rent = 1800+((days -20)*50);
    }
    return rent;
}



//solution of the problem 004

function megaFriend(friendsNames) {
    if (Array.isArray(friendsNames) == false) {
        largestName = "Input is not an array!!";
    }
    else if (friendsNames.length == 0) {
        largestName = "Collection of names cannot be null!!";
    }
    else {
        var largestName = friendsNames[0];
        var largestNameLength = friendsNames[0].length;
        for (var i = 0; i < friendsNames.length; i++){
            var tempLength = friendsNames[i].length;
            if (tempLength > largestNameLength) {
                largestNameLength = tempLength;
                largestName = friendsNames[i];
            }
        }
    }
    
    return largestName;

}

