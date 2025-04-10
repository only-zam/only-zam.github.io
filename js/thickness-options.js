
        document.getElementById('glassType').addEventListener('change', function() {
            const glassType = this.value;
            const glassThicknessSelect = document.getElementById('glassThickness');
            const allThicknessOptions = [
                { value: '4mm', text: '4mm' },
                { value: '5mm', text: '5mm' },
                { value: '6mm', text: '6mm' },
                { value: '8mm', text: '8mm' },
                { value: '3+3mmLam', text: '3+3mm Laminated' },
                { value: '4+4mmLam', text: '4+4mm Laminated' },
                { value: '5+5mmLam', text: '5+5mm Laminated' },
                { value: '6mmTuff', text: '6mm Toughened' },
                { value: '8mmTuff', text: '8mm Toughened' },
                { value: '10mmTuff', text: '10mm Toughened' }
            ];

            // Clear all options
            glassThicknessSelect.innerHTML = '';

            if (glassType === 'nashiji') {
                // Only add 5mm and 6mm options
                glassThicknessSelect.add(new Option('5mm', '5mm'));
                glassThicknessSelect.add(new Option('6mm', '6mm'));
            } else if (glassType === 'tinted') {
                // Exclude 6mmTuff, 8mmTuff, and 10mmTuff options
                allThicknessOptions.forEach(option => {
                    if (!['6mmTuff', '8mmTuff', '10mmTuff'].includes(option.value)) {
                        glassThicknessSelect.add(new Option(option.text, option.value));
                    }
                });
            } else if (glassType === 'oneWay') {
                // Exclude 6mmTuff, 8mmTuff, and 10mmTuff options
                allThicknessOptions.forEach(option => {
                    if (!['6mmTuff', '8mmTuff', '10mmTuff'].includes(option.value)) {
                        glassThicknessSelect.add(new Option(option.text, option.value));
                    }
                });
            }
             else {
                // Add all options
                allThicknessOptions.forEach(option => {
                    glassThicknessSelect.add(new Option(option.text, option.value));
                });
            }
        });