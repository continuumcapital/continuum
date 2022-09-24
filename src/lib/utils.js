
// For the truncation of crypto address

export const truncateCryptoAddress = ( str ) => {
    let addr = str
    let first = str.substr( 0, 5 )
    let last = str.substr( str.length - 5 )
    return first + '...' + last
}

export const numberWithCommas = ( str ) => {
    return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const currencyFormat = ( str ) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumSignificantDigits: Math.trunc(Math.abs( str )).toFixed().length,
    }).format( str )
}