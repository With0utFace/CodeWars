function boolToWord( bool ){
    if ( bool == true ) {
        return "Yes";
    } else {
        return "No";
    }
}

// or

function boolToWord( bool ){
    return bool == true ? "Yes" : "No";
}