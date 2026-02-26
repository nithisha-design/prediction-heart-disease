if request.method == 'POST':
    features = [float(request.form[f'f{i}']) for i in range(1,11)]

    # Convert to numpy
    features = np.array(features).reshape(1,-1)

    # Since you trained on scaled data, scale input also
    features = scaler.transform(features)

    if method == "anova":
        features = sel_anova.transform(features)
        pred = model_anova.predict(features)
    elif method == "chi2":
        features = sel_chi2.transform(features)
        pred = model_chi2.predict(features)
    else:
        features = sel_mi.transform(features)
        pred = model_mi.predict(features)
