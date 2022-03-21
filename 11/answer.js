// This problem was asked by Twitter.

// Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

// For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

// Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.

function autocomplete(word,set){
    const len = word.length
    let newSet = []
    set.map(item => {
        let sliced = item.slice(0,len)
        if(sliced == word){
           newSet.push(item)
        }
    }
            
    )
    return newSet
}

console.log(autocomplete('de', ['dog', 'deer', 'deal']));