# Simple python script
import json


import pandas as pd
import os
dirpath = os.getcwd()

df2 = pd.read_csv(dirpath+ '/queries/datasets/milkbasket_hackathon_sample_data.csv')
cust_id = df2['customer_id'].tolist()

data = {}
data['cust_ids'] = cust_id[:10]
json_data = json.dumps(data)
print(json_data)


