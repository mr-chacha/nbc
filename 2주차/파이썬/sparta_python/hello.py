people = [
    {'name': 'bob', 'age': 20},
    {'name': 'carry', 'age': 38},
    {'name': 'john'},
    {'name': 'smith', 'age': 17}
    ]

for person in people:
    try:
        if person ['age'] >15:
            print(person['name'])
    except:
        name = person['name']
        print('f{name}-에러입니다')