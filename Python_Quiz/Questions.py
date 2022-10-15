import sqlite3


class Questions:
    def __init__(self):
        pass
    connection = sqlite3.connect('mydb.sqlite')
    cursor = connection.cursor()
    command1 = """CREATE TABLE IF NOT EXISTS
               questions(question_ID INTEGER PRIMARY KEY AUTOINCREMENT,
               question TEXT, answer TEXT)"""
    cursor.execute(command1)
    cursor.execute('SELECT * FROM questions')
    QA = cursor.fetchall()

    def CorrectAnswer(self):
        start = True
        while start:
            input1 = int(input("""whould you like to take a quick quiz or would like to add a question to the quiz?
                            enter 1 to take quiz and 2 to add question:"""))
            if input1 == 1:
                self.cursor.execute('SELECT question_ID,question,answer FROM questions ORDER BY RANDOM() LIMIT 1')
                result = self.cursor.fetchone()
                print(result[1])
                input3 = input("Answer: ").upper()
                if input3 == result[2]:
                    print("Correct")
                else:
                    print("Wrong")
                input5 = input("Would you like to continue: Y OR N").upper()
                if input5 == "N":
                    start = False   
            elif input1 == 2:
                input6 = input("Input the question: ")
                input7 = (input("Input the answer: ")).upper()
                self.cursor.execute(f"INSERT INTO questions VALUES ({len(self.QA)+1}, '{input6}', '{input7}')")
                self.connection.commit()
                input8 = input("Would you like to continue: Y OR N").upper()
                if input8 == "N":
                    start = False


obj = Questions()
obj.CorrectAnswer()
