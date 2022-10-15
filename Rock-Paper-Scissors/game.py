import random
your_score=0
computer_score=0
def rps_game():
    global your_score
    global computer_score
    game=["rock","paper","scissors"]
    computer=random.choice(game)
    player=input("select: rock or paper or scissors- ")
    print("The computer chose: ",computer)
    if(computer==player):
        print("The match is a draw ")
        print(f"Your score is {your_score} and the computer's score is {computer_score}")
    elif((player=="rock" and computer=="scissors")or(player=="scissors" and computer=="paper")or(player=="paper" and computer=="rock")):
        print("You win! ")
        your_score=your_score+1
        print(f"Your score is {your_score} and the computer's score is {computer_score}")
    else:
        print("You lose!")
        computer_score=computer_score+1
        print(f"Your score is {your_score} and the computer's score is {computer_score}")
    conti=input("To continue press yes or press no to exit: ")
    if(conti=="yes"):
        rps_game()
    else:
        if(your_score==computer_score):
            print(f"Your final score is {your_score} and the computer's final score is {computer_score}")
            print("The tournament is a draw ")
        elif(your_score>computer_score):
            print(f"Your final score is {your_score} and the computer's final score is {computer_score}")
            print("You have won the tournament ")
        else:
            print(f"Your final score is {your_score} and the computer's final score is {computer_score}")
            print("You have lost the tournament ")
