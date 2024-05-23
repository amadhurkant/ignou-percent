def calculate(asmt, pape, marksInExam, marksInAsmt):
    tpm = 100*pape
    t_marksInExams = sum(marksInExam)

    tam = 100*asmt
    t_marksInAsmt = sum(marksInAsmt)

    total = (tpm*100)/70
    asmt_total = total-tpm
    asmtRevalued = asmt_total/tam
    Reval_t_marksInAsmt = t_marksInAsmt*asmtRevalued
    total_get = t_marksInExams+Reval_t_marksInAsmt
    percentage = round((total_get/total)*100, 2)

    print(f'''
Total Marks (adjusted): {int(total)}
Total Marks to be given in assignment: {round(asmt_total, 2)}
Total Marks to be given in examination: {int(tpm)}

Marks secured in examination: {int(t_marksInExams)}
Marks secured in assignment (adjusted): {round(Reval_t_marksInAsmt, 2)}
Total Marks Secured: {round(total_get, 2)}

Percentage: {percentage}''')

def main():
    asmt = int(input("Enter number of assignment in your course: "))
    pepe = int(input("Enter number of examinations in your course: "))
    asmt_m = []
    pepe_m = []
    for i in range(1, asmt+1):
        inp = int(input(f'''Enter marks you got in Assignment {i}: '''))
        assert inp < 101, "You got mere marks than 100"
        asmt_m.append(inp)
    print("#"*24)
    for i in range(1, pepe+1):
        inp = int(input(f'''Enter marks you got in Examination {i}: '''))
        assert inp < 101, "You got mere marks than 100"
        pepe_m.append(inp)
    calculate(asmt, pepe, pepe_m, asmt_m)

main()
