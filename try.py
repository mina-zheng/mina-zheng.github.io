
metro_areas = [
    ('Tokyo', (35,139)),
    ('New York', (40, -70))\
    ]
    
print(f'{"":15} | {"latitude" :>9} | {"longitutde": >9}')
for record in metro_areas:
    match record:
        case [name, (lat,lon)] if lon <= 0:
            print(f'{name:15}  | {lat:9.4f} | {lon:9.4f}')