#include <iostream>
#include <list>
#include <vector>

using namespace std;

class HashTable {
private:
    int BUCKET_SIZE;      
    list<int> *table;     

public:
    HashTable(int size) {
        this->BUCKET_SIZE = size;
        table = new list<int>[BUCKET_SIZE];
    }

    ~HashTable() {
        delete[] table;
    }

    int hashFunction(int key) {
        return (key % BUCKET_SIZE);
    }

    void insertItem(int key) {
        int index = hashFunction(key);
        table[index].push_back(key); 
    }

    void deleteItem(int key) {
        int index = hashFunction(key);
        
        list<int>::iterator i;
        for (i = table[index].begin(); i != table[index].end(); i++) {
            if (*i == key) {
                break;
            }
        }

        if (i != table[index].end()) {
            table[index].erase(i);
            cout << "Key " << key << " deleted successfully.\n";
        } else {
            cout << "Key " << key << " not found in the hash table.\n";
        }
    }

    void displayHash() {
        cout << "\n--- Current Hash Table ---\n";
        for (int i = 0; i < BUCKET_SIZE; i++) {
            cout << "Bucket " << i << ":";
            for (auto x : table[i]) {
                cout << " --> " << x;
            }
            cout << endl;
        }
        cout << "--------------------------\n\n";
    }
};

int main() {
    int keys[] = {15, 11, 27, 8, 12, 21, 14};
    int n = sizeof(keys) / sizeof(keys[0]);

    HashTable ht(7);

    cout << "Inserting keys into the hash table...\n";
    for (int i = 0; i < n; i++) {
        ht.insertItem(keys[i]);
    }

    ht.displayHash();


    cout << "Attempting to delete key 12:\n";
    ht.deleteItem(12);

    cout << "Attempting to delete key 99:\n";
    ht.deleteItem(99);
    ht.displayHash();

    return 0;
}