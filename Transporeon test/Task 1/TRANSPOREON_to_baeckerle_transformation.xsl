<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<Dransbord>
			<EureDransbordNummr><xsl:value-of select="tisys/tour/@id"/></EureDransbordNummr>
			<Uffpassa>
				<xsl:choose>
					<xsl:when test="/tisys/tour/tkn_weight > 20000">musch</xsl:when>
					<xsl:otherwise>muschnet</xsl:otherwise>
				</xsl:choose>
			</Uffpassa>
			<Liefrunga>
				<xsl:for-each select="/tisys/tour/shipments/shipment">
					<Liefrung>
						<DemseiLiefrungsNummr><xsl:value-of select="number"/></DemseiLiefrungsNummr>
						<WasDaReiKommt>
							<xsl:for-each select="parameters/parameter">
									<xsl:if test="qualifier = 'shippingType'">
										<xsl:value-of select="substring(substring-before(value,' '),1)"/>
									</xsl:if>
							</xsl:for-each>
						</WasDaReiKommt>	
						<AlleBaramedrZammaZaehlt>
								<xsl:value-of select="count(parameters/parameter)" />						
						</AlleBaramedrZammaZaehlt>					
					</Liefrung>
				</xsl:for-each>
			</Liefrunga>
		</Dransbord>
	</xsl:template>
</xsl:stylesheet>