import os
rootdir = 'C:/Users/Dinosaur/Desktop/mockAPI/MockStockAPI/stocks'

# rename file inside directories
for subdir, dirs, files in os.walk(rootdir):
    for file in files:
        # print(file)
        if(file=='WeekMovement.json'):
            print('yes!!!')
            path=subdir.replace('\\',"/")
            old_file = os.path.join(""+path, "WeekMovementStocks.json")
            new_file = os.path.join(""+path, "WeekMovement.json")
            os.rename(old_file, new_file)


