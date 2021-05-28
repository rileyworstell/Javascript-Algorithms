/*
Write a SuffixTrie class for a Suffix-Trie-like data structure.
It should have a root property set to the root note of the trie and should support:
- Creating the trie from a string, by calling populateSuffixTrieFrom method upon class instantiation, which should 
populate the root of the class.
- Searching for strings in the trie.
- Every string added should end with "*"
*/

class SuffixTrie {
    constructor(string) {
        this.root = {};
        this.endSymbol = '*';
        this.populateSuffixTrieFrom(string);
    }

    populateSuffixTrieFrom(string) {
        for (let i = 0; i < string.length; i++) {
            this.insertSubstringStartingAt(i, string);
        }
    }

    insertSubstringStartingAt(i, string) {
        let node = this.root;
        for (let j = i; j < string.length; j++) {
            const letter = string[j];
            if (!(letter in node)) node[letter] = {};
            node = node[letter];
        }
        node[this.endSymbol] = true;
    }

    contains(string) {
        let node = this.root;
        for (const letter of string) {
            if (!(letter in node)) return false;
            node = node[letter];
        }
        return this.endSymbol in node;
    }
}

let string = 'babc';
console.log(populateSuffixTrieFrom(string));
/*
{
    "c": { "*": true},
    "b": {
        "c": { "*": true},
        "a": {"b": {"c": {"*": true}}},
    },
    "a": {"b": {"c": {"*": true}}},
}
*/
