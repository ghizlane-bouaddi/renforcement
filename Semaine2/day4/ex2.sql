SELECT consultations.id,medecins.id,patients.nom FROM consultations 
JOIN patients ON patients.id = consultations.patient_id
JOIN medecins ON medecins.id = consultations.medecin_id


SELECT COUNT(consultations.id) ,medecins.id FROM medecins
JOIN consultations ON consultations.medecin_id = medecins.id
GROUP BY medecins.id
HAVING COUNT(consultations.date_consultation)

SELECT SUM(consultations.cout),patients.id FROM patients
JOIN consultations ON consultations.patient_id = patients.id
GROUP BY patients.id

SELECT consultations.id ,patients.id FROM patients
LEFT JOIN consultations ON consultations.patient_id = patients.id
WHERE consultations.id IS null

SELECT MAX( medecins.id),patients.id  FROM medecins
JOIN patients ON patients.id = medecins.id
GROUP BY patients.id