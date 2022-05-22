from datetime import date
import datetime
from contextlib import nullcontext
import json
import os
# python script: Updates json files in the stocks directory

rootdir = './stocks'

# update dayMovement json files datetime
for subdir, dirs, files in os.walk(rootdir):
    for file in files:
        path=subdir.replace('\\',"/")
        if(file=='DayMovement.json'):
            with open(path+'/'+file,'r') as f:
                currFileDate=''
                currDate=datetime.datetime.now()
                data=json.load(f)
                
                for key in data:
                    if key=='values':
                        valueData=data[key]
                        currFileDate=valueData[0]['datetime'].split(' ')[0]
                        for values in valueData:
                            if currFileDate != values['datetime'].split(' ')[0]:
                                currDate=currDate- datetime.timedelta(1)
                                currFileDate=values['datetime'].split(' ')[0]

                            todaysDate=str(currDate).split(' ')[0]
                            dateTime=values['datetime'].split(' ')[1]
                            values['datetime']=todaysDate+' '+dateTime

                with open(path+'/'+file,'w') as json_file:
                    json.dump(data,json_file, indent=4, separators=(',', ': ')) 

# update weekMovement json files datetime
for subdir, dirs, files in os.walk(rootdir):
    for file in files:
        path=subdir.replace('\\',"/")
        if(file=='WeekMovement.json'):
            with open(path+'/'+file,'r') as f:
                currFileDate=''
                currDate=datetime.datetime.now()
                data=json.load(f)
                
                for key in data:
                    if key=='values':
                        valueData=data[key]
                        currFileDate=valueData[0]['datetime'].split(' ')[0]

                        for values in valueData:
                            if currFileDate != values['datetime'].split(' ')[0]:
                                currDate=currDate- datetime.timedelta(1)
                                currFileDate=values['datetime'].split(' ')[0]
                            todaysDate=str(currDate).split(' ')[0]
                            dateTime=values['datetime'].split(' ')[1]
                            values['datetime']=todaysDate+' '+dateTime

                with open(path+'/'+file,'w') as json_file:
                    json.dump(data,json_file, indent=4, separators=(',', ': ')) 


# update monthMovement json files datetime
for subdir, dirs, files in os.walk(rootdir):
    for file in files:
        path=subdir.replace('\\',"/")
        if(file=='MonthMovement.json'):
            with open(path+'/'+file,'r') as f:
                currFileDate=''
                currDate=datetime.datetime.now()
                data=json.load(f)
                
                for key in data:
                    if key=='values':
                        valueData=data[key]
                        currFileDate=valueData[0]['datetime'].split(' ')[0]
                        for values in valueData:
                            if currFileDate != values['datetime'].split(' ')[0]:
                                currDate=currDate- datetime.timedelta(1)
                                currFileDate=values['datetime'].split(' ')[0]
                            todaysDate=str(currDate).split(' ')[0]
                            dateTime=values['datetime'].split(' ')[1]
                            values['datetime']=todaysDate+' '+dateTime
                with open(path+'/'+file,'w') as json_file:
                    json.dump(data,json_file, indent=4, separators=(',', ': ')) 
