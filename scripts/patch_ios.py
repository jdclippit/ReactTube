import json
d = json.load(open('app.json'))
plugs = []
for p in d['expo']['plugins']:
    if isinstance(p, list):
        if 'apple-targets' in p[0]:
            continue
        if len(p) > 1 and isinstance(p[1], dict):
            p[1]['isTV'] = False
    plugs.append(p)
d['expo']['plugins'] = plugs
json.dump(d, open('app.json', 'w'), indent=2)
print('patched: removed apple-targets, isTV=false')
