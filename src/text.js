function  searchVal(){
    // Linear search. 
        if (post) { 
        for (var i=0 ; i < post[i].blogTitle.length ; i++) {
          if (post[i].blogTitle == searchField) {
              tag.push(post[i])
          
                return tag;
              } else { 
                return false;
              }
              }
              return true;
          
          }  
            return true;
        }

          // const submit = (e) => {
  //   e.preventDefault()
  //   searchVal(searchField);
  //   setTag(tag);
    
  // }
 const resultHandler = useCallback(
    (e) => {
     searchVal(searchField)
      setTag(tag)
     
    },
    [setTag],
  )
  