function merge(array1, array2) {
  // var result as array
  // while ( a and b have elements )
  //   if ( a[0] > b[0] )
  //     add b[0] to the end of result
  //     remove b[0] from b
  //   else
  //     add a[0] to the end of result
  //     remove a[0] from a
  //   end if
  // end while

  // while ( a has elements )
  //   add a[0] to the end of result
  //   remove a[0] from a
  // end while

  // while ( b has elements )
  //   add b[0] to the end of result
  //   remove b[0] from b
  // end while

  // return result
}

function mergeSort(array) {
  // if ( n == 1 ) return a

  // /* Split the array into two */
  // var l1 as array = a[0] ... a[n/2]
  // var l2 as array = a[n/2+1] ... a[n]

  // l1 = mergesort( l1 )
  // l2 = mergesort( l2 )

  // return merge( l1, l2 )
}

module.exports = {
  merge,
  mergeSort
};
