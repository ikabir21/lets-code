import sqlite3


class Hangman:

    connection = sqlite3.connect('hangman.sqlite')
    cursor = connection.cursor()
    command1 = """CREATE TABLE IF NOT EXISTS
               questions(word TEXT)"""
    cursor.execute(command1)
    # cursor.execute("INSERT INTO questions VALUES('FISH')")
    # cursor.execute("INSERT INTO questions VALUES('BIRD')")
    # cursor.execute("INSERT INTO questions VALUES('GOAT')")
    # connection.commit()
    # result2 = []
    count2 = 0
    collect = ""
    mystring = ""
    count = 0
    count4 = 0

    def __init__(self):
        pass

    def hang(self):
        if self.count2 == 1:
            print("""  ______
    |
    |
    |
    |
    |
  __|__
""")
            print(f"Your spelling: {self.collect}")
            print("Wrong, You have 4 chance left")
            self.continuation()
        elif self.count2 == 2:
            print("""  ______
    |   |
    |   |
    |
    |
    |
  __|__
                        """)
            print(f"Your spelling: {self.collect}")
            print("Wrong, You have 3 chance left")
            self.continuation()
        elif self.count2 == 3:
            print("""  ______
    |   |
    |   |
    |   |
    |
    |
  __|__
                        """)
            print(f"Your spelling: {self.collect}")
            print("Wrong, You have 2 chance left")
            self.continuation()
        elif self.count2 == 4:
            print("""  ______
    |   |
    |   |
    |   |
    |   O
    |
  __|__
                        """)
            print(f"Your spelling: {self.collect}")
            print("Wrong, You have 1 chance left")
            self.continuation()
        elif self.count2 == 5:
            print("""  ______
    |   |
    |   |
    |   |
    |   O
    |  /|\"
  __|__ |
                        """)
            # self.continuation()
            print(f"Wrong, the word was {self.mystring}")

    def ADD(self):
        input6 = input("Type the word you will like to add: ").upper()
        if self.cursor.execute(f"SELECT EXISTS(SELECT 1 FROM questions WHERE word='{input6}')").fetchone() == (1,):
            print("That word already exist")
            self.ADD()
        else:
            self.cursor.execute(f"INSERT INTO questions VALUES('{input6}')")
            self.connection.commit()

            print("Word Added")
        # all2 = []
        # for h in range(0, len(All)):
        #     all2.append(All[h])
        # print(all2)
        # if input6 in All:
        #     print("That word already exist")
        # else:
        #     self.cursor.execute(f"INSERT INTO questions VALUES('{input6}')")

    def Win(self):
        if self.collect == self.mystring:
            print("YOU WIN")
            input5 = input("Would you like to add to the guess list y for yes and n for no: ").upper()
            if input5 == "Y":
                self.ADD()
            elif input5 == "N":
                print("Have a nice Day")
        else:
            self.continuation()

    def Start(self):
        self.cursor.execute('SELECT word FROM questions ORDER BY RANDOM() LIMIT 1')
        result = self.cursor.fetchone()
        self.mystring += result[0]
        self.count = len(self.mystring)
        # print(len(result[0]))
        for i in self.mystring:
        #     self.result2.append(result)
        # print(self.result2)
            print("_")
        self.continuation()

    def continuation(self):
        input3 = input("Enter your Guess: ").upper()
        if input3 in self.mystring[self.count4]:
            self.count4 += 1
            self.collect += input3
            print(self.collect)
            self.count -= 1
            # print(*self.collect, sep="\n")
            for i in range(0, self.count):
                print("_")
            self.Win()

        else:
            self.count2 += 1
            self.hang()

    def welcome(self):
        input1 = input("""Welcom to Hangman Game..
                       All you have to do is guess the letters in a word..
                       You have only 5 chance to make a wrong guess after which you will be hanged..
                       Are you ready: """).upper()
        if input1 == "Y":
            input2 = input("What would you like to be called: ")
            print(f"Welcome {input2}")
            self.Start()
        elif input1 == "N":
            print("thank you.... see you next time")
        else:
            print("input a Y for yes and N for no")
            self.welcome()


obj = Hangman()
obj.welcome()
