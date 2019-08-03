# Simple python script
import json


import pandas as pd
df2 = pd.read_csv('./datasets/milkbasket_hackathon_sample_data.csv')
cust_id = df2['customer_id'].tolist()

data = {}
data['cust_ids'] = cust_id[:10]
json_data = json.dumps(data)
print(json_data)


