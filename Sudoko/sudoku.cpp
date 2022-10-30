#include <iostream>
#include<stdio.h>
using namespace std;

#define N 9 //defining grid dimension, that is 9 by 9

int sudokuboard[N][N] = 
{
 {0, 0, 6, 5, 0, 8, 4, 0, 0},
 {5, 2, 0, 0, 0, 1, 0, 0, 0},
 {0, 7, 8, 0, 0, 0, 0, 0, 1},
 {0, 0, 4, 0, 1, 0, 0, 8, 0},
 {9, 0, 0, 8, 2, 3, 0, 0, 5},
 {0, 5, 0, 0, 9, 0, 6, 0, 0},
 {1, 3, 0, 0, 0, 0, 2, 5, 0},
 {0, 0, 0, 0, 0, 0, 0, 7, 4},
 {0, 0, 5, 2, 0, 6, 3, 0, 0}
};

bool checkColumn(int c, int value)
{ 
 for (int r = 0; r < N; r++)
  if (sudokuboard[r] == value)
   return true;
 return false;
}

bool checkRow(int r, int value)
{ 
for (int c = 0; c < N; c++)
 if (sudokuboard[r] == value)
  return true;
 return false;
}

bool checkBox(int initial_row int initial_column, int value)
{
for (int r = 0; r < 3; r++)
 for (int c = 0; c < 3; c++)
  if (sudokuboard[r+initial_row] == value)
   return true;
 return false;
}

void showGame()
{ 
for (int r = 0; r < N; r++){
 for (int c = 0; c < N; c++)
 {
  if(c == 3 || c == 6)
   cout << " | ";
  cout << sudokuboard[r] <<" ";
 }
 if(r == 2 || r == 5)
 {
  cout << endl;
  for(int k = 0; k<N; k++)
   cout << "---";
 }
 cout << endl;
}
}


bool findBox(int &r, int &c)
{ 
 for (r = 0; r < N; r++)
  for (c = 0; c < N; c++)
   if (sudokuboard[r] == 0) 
    return true;
 return false;
}

bool canEnter(int r, int c, int value)
{
 return !checkRow(r, value) && !checkColumn(c, value) && !checkBox(r-r%3,c-c%3,value);
}

bool finalSolution(){
int r, c;
if (!findBox(r, c))
 return true; 
for (int val = 1; val <= 9; val++)
 { 
  if (canEnter(r, c, val))
  { 
   sudokuboard[r] = val;
   if (finalSolution()) 
    return true;
   sudokuboard[r] = 0; 
  }
 }
return false;
}

int main(){
if (finalSolution() == true)
 showGame();
else
 cout << "This game can not be solved";
}
#include <iostream>
#include<stdio.h>
using namespace std;

#define N 9 //defining grid dimension, that is 9 by 9

int sudokuboard[N][N] = 
{
 {0, 0, 6, 5, 0, 8, 4, 0, 0},
 {5, 2, 0, 0, 0, 1, 0, 0, 0},
 {0, 7, 8, 0, 0, 0, 0, 0, 1},
 {0, 0, 4, 0, 1, 0, 0, 8, 0},
 {9, 0, 0, 8, 2, 3, 0, 0, 5},
 {0, 5, 0, 0, 9, 0, 6, 0, 0},
 {1, 3, 0, 0, 0, 0, 2, 5, 0},
 {0, 0, 0, 0, 0, 0, 0, 7, 4},
 {0, 0, 5, 2, 0, 6, 3, 0, 0}
};

bool checkColumn(int c, int value)
{ 
 for (int r = 0; r < N; r++)
  if (sudokuboard[r] == value)
   return true;
 return false;
}

bool checkRow(int r, int value)
{ 
for (int c = 0; c < N; c++)
 if (sudokuboard[r] == value)
  return true;
 return false;
}

bool checkBox(int initial_row int initial_column, int value)
{
for (int r = 0; r < 3; r++)
 for (int c = 0; c < 3; c++)
  if (sudokuboard[r+initial_row] == value)
   return true;
 return false;
}

void showGame()
{ 
for (int r = 0; r < N; r++){
 for (int c = 0; c < N; c++)
 {
  if(c == 3 || c == 6)
   cout << " | ";
  cout << sudokuboard[r] <<" ";
 }
 if(r == 2 || r == 5)
 {
  cout << endl;
  for(int k = 0; k<N; k++)
   cout << "---";
 }
 cout << endl;
}
}


bool findBox(int &r, int &c)
{ 
 for (r = 0; r < N; r++)
  for (c = 0; c < N; c++)
   if (sudokuboard[r] == 0) 
    return true;
 return false;
}

bool canEnter(int r, int c, int value)
{
 return !checkRow(r, value) && !checkColumn(c, value) && !checkBox(r-r%3,c-c%3,value);
}

bool finalSolution(){
int r, c;
if (!findBox(r, c))
 return true; 
for (int val = 1; val <= 9; val++)
 { 
  if (canEnter(r, c, val))
  { 
   sudokuboard[r] = val;
   if (finalSolution()) 
    return true;
   sudokuboard[r] = 0; 
  }
 }
return false;
}

int main(){
if (finalSolution() == true)
 showGame();
else
 cout << "This game can not be solved";
}
