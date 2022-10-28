#include <stdio.h>                                                 //header files
#include <stdlib.h>

//This program is to create a tic tac toe game
char Index[11]={' ','1','2','3','4','5','6','7','8','9'};          //creating array for game Index

void printBoard(void);                                             //function prototypes
void markBoard(int player, char symbol);
void drawBoard(void);
int checkForWin(void);

int main()
{
    printBoard();                                                  //printing info and game

    for(int i=1 ; i<10 ; ++i)                                      //taking max input of 9 times
    {
        int player = 0;
        char symbol;
        int result = 0;

        if(i%2!=0)                                                 //player 1 enters
        {
            player = 1;
            symbol = 'X';

            markBoard(player,symbol);                              //marking the sign on the board

            drawBoard();                                           /*clearing the console and displaying new table
                                                                     using printBoard function*/
            result = checkForWin();                                //checking if player won
            if(result == 1)
            {
                printf("\n\n==>Player %d wins\n",player);          //announcing winner
                exit(0);                                           //exit the game
            }
        }
        else
        {
            player = 2;
            symbol = 'O';

            markBoard(player,symbol);

            drawBoard();

            result = checkForWin();
            if(result == 1)
            {
                printf("\n\n==>Player %d wins\n",player);
                exit(0);
            }
        }
    }

    printf("\n\nGame Draw\n");
    return 0;
}

void printBoard(void)
{
    printf("\t Tic Tac Toe");

    printf("\n\n  Player 1(X) - Player 2(O)\n");

    printf("\n        |     |    ");
    printf("\n     %c  |  %c  |  %c  ",Index[1],Index[2],Index[3]);
    printf("\n   _____|_____|_____");
    printf("\n        |     |    ");
    printf("\n     %c  |  %c  |  %c  ",Index[4],Index[5],Index[6]);
    printf("\n   _____|_____|_____");
    printf("\n        |     |    ");
    printf("\n     %c  |  %c  |  %c  ",Index[7],Index[8],Index[9]);
    printf("\n        |     |    ");
}

void markBoard(int player, char symbol)                            //taking two arguments
{
    int entryIndex = 0;

    top:printf("\n\nPlayer %d, enter your index -> ",player);
    scanf("%d",&entryIndex);                                       //taking entry Index

    if(entryIndex>0 && entryIndex<10 && Index[entryIndex]!='X' && Index[entryIndex]!='O')  //checking for invalid selection
    {
        Index[entryIndex] = symbol;                                //assigning symbol (X/O)
    }
    else                                                           //taking input again for invalid selection
    {
        printf("Invalid move");
        goto top;
    }
}

void drawBoard(void)
{
    system("cls");                                                 //clears the console
    printBoard();                                                  //prints
}

int checkForWin(void)
{
    int result = 0;

    if((Index[1] == Index[2] && Index[2] == Index[3]) || (Index[4] == Index[5] && Index[5] == Index[6]) ||  //checking
       (Index[7] == Index[8] && Index[8] == Index[9]) || (Index[1] == Index[4] && Index[4] == Index[7]) ||
       (Index[2] == Index[5] && Index[5] == Index[8]) || (Index[3] == Index[6] && Index[6] == Index[9]) ||
       (Index[1] == Index[5] && Index[5] == Index[9]) || (Index[3] == Index[5] && Index[5] == Index[7]))
    {
        result = 1;
    }

    return result;
}
