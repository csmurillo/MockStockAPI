import os
rootdir = 'C:/Users/Dinosaur/Desktop/mockAPI/MockStockAPI/stocks'

for subdir, dirs, files in os.walk(rootdir):
    for file in files:
        path=subdir.replace('\\',"/")
        # print(path)
        old_file = os.path.join(""+path, "DayMovementStocks.json")
        new_file = os.path.join(""+path, "DayMovement.json")
        # print(old_file,new_file)
        os.rename(old_file, new_file)
        # print(os.path.join(subdir, file))



